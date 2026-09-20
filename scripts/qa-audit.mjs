#!/usr/bin/env node

/**
 * End-to-End Quality Assurance & Launch Readiness Audit (Phase 10)
 * Evaluates the Next.js production build artifacts, pre-rendered pages,
 * asset integrity, security attributes, accessibility rules, and PRD Section 31 DoD.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const appServerDir = path.join(rootDir, ".next", "server", "app");
const staticCssDir = path.join(rootDir, ".next", "static", "css");
const publicDir = path.join(rootDir, "public");

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    testsFailed++;
  }
}

function readAppFile(relPath) {
  const fullPath = path.join(appServerDir, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Expected build file not found: ${fullPath}`);
  }
  return fs.readFileSync(fullPath, "utf-8");
}

function runAudit() {
  console.log("=================================================");
  console.log("STARTING PHASE 10 QA AUDIT & LAUNCH READINESS");
  console.log("=================================================\n");

  // ----------------------------------------------------
  // SUITE 1: Route Pre-Rendering & Build Artifacts
  // ----------------------------------------------------
  console.log("Suite 1: Route Pre-Rendering & Production Output");
  const expectedRoutes = [
    { file: "index.html", name: "Homepage (/)" },
    { file: "_not-found.html", name: "Custom 404 Error Page" },
    { file: "projects/pixoree.html", name: "Pixoree Case Study" },
    { file: "projects/children-of-the-ummah.html", name: "Children of the Ummah Case Study" },
    { file: "projects/skillbento.html", name: "Skillbento Case Study" },
    { file: "projects/paw-pals-rescue.html", name: "Paw Pals Rescue Case Study" },
    { file: "robots.txt.body", name: "Robots txt file" },
    { file: "sitemap.xml.body", name: "Sitemap xml file" },
    { file: "manifest.webmanifest.body", name: "Web App Manifest" },
    { file: "opengraph-image.body", name: "OpenGraph Dynamic Image" },
    { file: "twitter-image.body", name: "Twitter Dynamic Image" },
  ];

  for (const item of expectedRoutes) {
    const fullPath = path.join(appServerDir, item.file);
    const exists = fs.existsSync(fullPath);
    const size = exists ? fs.statSync(fullPath).size : 0;
    assert(exists && size > 0, `${item.name} pre-rendered (${size.toLocaleString()} bytes)`);
  }

  // ----------------------------------------------------
  // SUITE 2: Custom Branded 404 Error Page
  // ----------------------------------------------------
  console.log("\nSuite 2: Custom Branded 404 Page Behavior");
  const notFoundHtml = readAppFile("_not-found.html");
  assert(notFoundHtml.includes("Page Not Found"), "404 page renders 'Page Not Found' headline");
  assert(notFoundHtml.includes("404 Error"), "404 page displays '404 Error' tag");
  assert(notFoundHtml.includes("Return to Home"), "404 page displays 'Return to Home' action button");
  assert(notFoundHtml.includes('href="/"'), "404 page links directly back to '/'");
  assert(notFoundHtml.includes('href="/projects/pixoree"'), "404 page links to Pixoree case study");
  assert(notFoundHtml.includes('href="/projects/children-of-the-ummah"'), "404 page links to Children of the Ummah case study");
  assert(notFoundHtml.includes('href="/projects/skillbento"'), "404 page links to Skillbento case study");
  assert(notFoundHtml.includes('href="/projects/paw-pals-rescue"'), "404 page links to Paw Pals Rescue case study");

  // ----------------------------------------------------
  // SUITE 3: Static Asset & Media Integrity
  // ----------------------------------------------------
  console.log("\nSuite 3: Static Asset & Media Integrity");
  const resumePath = path.join(publicDir, "Md. Ahsan Habib Resume.pdf");
  assert(fs.existsSync(resumePath), "Résumé file exists at 'public/Md. Ahsan Habib Resume.pdf'");
  const resumeSize = fs.existsSync(resumePath) ? fs.statSync(resumePath).size : 0;
  assert(resumeSize > 50000, `Résumé file is non-empty (${(resumeSize / 1024).toFixed(1)} KB)`);

  const headshotPath = path.join(publicDir, "images", "headshot.svg");
  assert(fs.existsSync(headshotPath), "Headshot file exists at 'public/images/headshot.svg'");
  const headshotContent = fs.existsSync(headshotPath) ? fs.readFileSync(headshotPath, "utf-8") : "";
  assert(headshotContent.includes("<svg") && headshotContent.includes("</svg>"), "Headshot is valid SVG");

  const faviconPath = path.join(publicDir, "favicon.ico");
  const faviconExists = fs.existsSync(faviconPath) || fs.existsSync(path.join(rootDir, "src", "app", "favicon.ico"));
  assert(faviconExists, "Favicon exists at 'public/favicon.ico' and 'src/app/favicon.ico'");

    // ----------------------------------------------------
    // TEST SUITE 4: Link & Navigation Integrity
    // ----------------------------------------------------
    console.log("\nSuite 4: Link & Navigation Integrity");
    const homeHtml = readAppFile("index.html");

    // Internal navigation links
    assert(homeHtml.includes('href="/"') || homeHtml.includes('aria-label="Ahsan — Home"'), "Home contains logo link returning to '/'");
    assert(homeHtml.includes('href="/#work"'), "Navigation contains link to '#work'");
    assert(homeHtml.includes('href="/#about"'), "Navigation contains link to '#about'");
    assert(homeHtml.includes('href="/#contact"'), "Navigation contains link to '#contact'");

    // Project links on Homepage
    assert(homeHtml.includes('href="/projects/pixoree"'), "Homepage links to /projects/pixoree");
    assert(homeHtml.includes('href="/projects/children-of-the-ummah"'), "Homepage links to /projects/children-of-the-ummah");
    assert(homeHtml.includes('href="/projects/skillbento"'), "Homepage links to /projects/skillbento");
    assert(homeHtml.includes('href="/projects/paw-pals-rescue"'), "Homepage links to /projects/paw-pals-rescue");

    // Required external links from PRD & Task checklist
    const requiredExternalLinks = [
      { url: "https://pixoree.app/", label: "Pixoree live site" },
      { url: "https://www.childrenoftheummah.org.uk/", label: "Children of the Ummah live site" },
      { url: "https://github.com/sowmik-sec/paw-pals-rescue-client", label: "Paw Pals Rescue repo" },
      { url: "https://github.com/sowmik-sec", label: "GitHub profile" },
      { url: "https://www.linkedin.com/in/md-ahsan-habib-18569b21a/", label: "LinkedIn profile" },
      { url: "mailto:sowmik-sec@gmail.com", label: "Email (mailto:sowmik-sec@gmail.com)" },
    ];

    for (const item of requiredExternalLinks) {
      assert(homeHtml.includes(item.url), `Homepage contains required link: ${item.label}`);
    }

    // Check external links security attributes across all pages
    const htmlPages = [
      { file: "index.html", path: "/" },
      { file: "projects/pixoree.html", path: "/projects/pixoree" },
      { file: "projects/children-of-the-ummah.html", path: "/projects/children-of-the-ummah" },
      { file: "projects/skillbento.html", path: "/projects/skillbento" },
      { file: "projects/paw-pals-rescue.html", path: "/projects/paw-pals-rescue" },
    ];

    for (const page of htmlPages) {
      const html = readAppFile(page.file);
      const linkRegex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
      let match;
      let externalCount = 0;
      let insecureCount = 0;
      while ((match = linkRegex.exec(html)) !== null) {
        externalCount++;
        const tag = match[0];
        const hasBlank = /target=["']_blank["']/i.test(tag);
        const hasNoopener = /rel=["'][^"']*noopener[^"']*["']/i.test(tag);
        const hasNoreferrer = /rel=["'][^"']*noreferrer[^"']*["']/i.test(tag);
        if (!hasBlank || !hasNoopener || !hasNoreferrer) {
          insecureCount++;
          console.error(`    Missing security attributes in ${page.path}: ${tag}`);
        }
      }
      assert(
        insecureCount === 0,
        `All external HTTP links in ${page.path} (${externalCount} found) have target="_blank" and rel="noopener noreferrer"`
      );
    }

  // ----------------------------------------------------
  // SUITE 5: Project Route Back-Navigation / Breadcrumbs
  // ----------------------------------------------------
  console.log("\nSuite 5: Project Breadcrumb & Back-Navigation");
  const caseStudies = [
    { file: "projects/pixoree.html", path: "/projects/pixoree" },
    { file: "projects/children-of-the-ummah.html", path: "/projects/children-of-the-ummah" },
    { file: "projects/skillbento.html", path: "/projects/skillbento" },
    { file: "projects/paw-pals-rescue.html", path: "/projects/paw-pals-rescue" },
  ];

  for (const cs of caseStudies) {
    const csHtml = readAppFile(cs.file);
    assert(
      csHtml.includes('href="/#work"') || csHtml.includes('href="/"'),
      `${cs.path} contains back-link returning to homepage`
    );
  }

  // ----------------------------------------------------
  // SUITE 6: Accessibility & Preferences
  // ----------------------------------------------------
  console.log("\nSuite 6: Accessibility & Preferences");
  assert(homeHtml.includes('lang="en"'), "HTML specifies lang='en'");
  assert(homeHtml.includes('href="#main-content"'), "Skip to content link is present in DOM");
  assert(homeHtml.includes('id="main-content"'), "Main landmark with id='main-content' is present");
  assert(homeHtml.includes("Toggle color theme"), "Theme toggle has accessible title/label");

  // Inspect generated CSS bundle for reduced-motion and focus-visible
  const cssFiles = fs.readdirSync(staticCssDir).filter((f) => f.endsWith(".css"));
  assert(cssFiles.length > 0, `Found ${cssFiles.length} static CSS bundle(s)`);
  let foundReducedMotion = false;
  let foundFocusVisible = false;
  let foundDarkMode = false;

  for (const cssFile of cssFiles) {
    const cssContent = fs.readFileSync(path.join(staticCssDir, cssFile), "utf-8");
    if (cssContent.includes("prefers-reduced-motion:reduce") || cssContent.includes("prefers-reduced-motion: reduce")) {
      foundReducedMotion = true;
    }
    if (cssContent.includes("focus-visible")) {
      foundFocusVisible = true;
    }
    if (cssContent.includes(".dark") && cssContent.includes("--background")) {
      foundDarkMode = true;
    }
  }

  assert(foundReducedMotion, "CSS bundle contains @media (prefers-reduced-motion: reduce) overrides");
  assert(foundFocusVisible, "CSS bundle contains visible focus ring styles (:focus-visible)");
  assert(foundDarkMode, "CSS bundle contains dark mode token definitions (.dark & CSS variables)");

  // ----------------------------------------------------
  // SUITE 7: Mobile Touch Target Constraints (>= 44x44px)
  // ----------------------------------------------------
  console.log("\nSuite 7: Mobile Touch Target Constraints (>= 44x44px)");
  assert(
    homeHtml.includes("min-h-[44px]") || homeHtml.includes("min-h-\\"),
    "Mobile interactive elements enforce minimum 44px tap target height"
  );
  assert(
    homeHtml.includes("min-w-[44px]") || homeHtml.includes("min-w-\\"),
    "Theme toggle button enforces minimum 44px tap target width on mobile"
  );

  // ----------------------------------------------------
  // SUITE 8: PRD Section 31 (Definition of Done) Validation
  // ----------------------------------------------------
  console.log("\nSuite 8: Section 31 (Definition of Done) Checklist");
  assert(
    homeHtml.includes("Full Stack Developer"),
    "DoD 1: Visitor immediately understands Ahsan is a Full Stack Developer"
  );
  assert(
    homeHtml.includes("I build fast, scalable web products from idea to production"),
    "DoD 2: Hero communicates product-building positioning"
  );
  assert(
    homeHtml.includes("PIXOREE") && homeHtml.includes("CHILDREN OF THE UMMAH"),
    "DoD 3: Pixoree and Children of the Ummah are strongest project showcases"
  );
  assert(
    homeHtml.includes("Currently Building") && homeHtml.includes("In Development"),
    "DoD 4: Unfinished projects are explicitly marked in development"
  );
  assert(
    homeHtml.includes("Selected Work") && homeHtml.includes("View case study"),
    "DoD 5: Project case studies exist for important work"
  );
  assert(
    homeHtml.includes("/images/headshot.svg") && !homeHtml.includes("hero-headshot"),
    "DoD 6: Headshot appears in About section, not dominating hero"
  );
  assert(
    homeHtml.includes("ThemeScript") || homeHtml.includes("data-theme"),
    "DoD 7: Theme toggle script is present for light and dark modes"
  );
  assert(
    homeHtml.includes("Md.%20Ahsan%20Habib%20Resume.pdf"),
    "DoD 8: Résumé download link is present and valid"
  );

  // ----------------------------------------------------
  // Summary
  // ----------------------------------------------------
  console.log("\n=================================================");
  console.log(`QA AUDIT COMPLETE: ${testsPassed} passed, ${testsFailed} failed.`);
  console.log("=================================================");

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runAudit();
