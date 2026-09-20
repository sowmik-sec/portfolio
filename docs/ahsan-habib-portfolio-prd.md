# Product Requirements Document (PRD)
# Ahsan Habib — Personal Portfolio

**Document status:** Ready for agentic implementation  
**Primary goal:** Build a fast, creative, credible personal portfolio for job hunting and freelancing.

---

## 1. Product Overview

This website is a personal portfolio for **Md. Ahsan Habib**, a Full Stack Developer.

The portfolio must communicate one central idea:

> **Ahsan builds real web products from idea to production.**

The website should feel like a **high-end product showcase created by a full-stack developer**, rather than a traditional résumé website, generic developer template, or flashy experimental site.

The portfolio serves two primary purposes:

1. Job hunting — recruiters, hiring managers, companies, startups, and remote employers.
2. Freelancing — potential clients, agencies, and businesses looking for a developer.

The site should appeal to Bangladesh-based companies as well as international and remote opportunities.

---

# 2. Product Positioning

## Primary role

**Full Stack Developer**

## Supporting positioning

A developer focused on:

- production web applications
- SaaS platforms
- complex interactive interfaces
- full-stack architecture
- APIs and backend systems
- payment integrations
- turning product ideas into working software

## Hero statement

> **I build fast, scalable web products from idea to production.**

Do not make AI coding agents a major selling point. Tools such as Claude Code, OpenCode, or Antigravity may remain in technical/tooling information, but they should not be part of the site's primary branding.

---

# 3. Design Direction

## Overall style

**Editorial Product Portfolio**

The visual direction should combine:

- minimal foundation
- strong typography
- large product visuals
- editorial/asymmetric layouts
- subtle interactions
- strong whitespace
- serious technical credibility
- creative presentation

Target feeling:

> A product designer's visual polish combined with a serious full-stack developer's technical credibility.

Avoid making the website look like:

- a generic résumé site
- a generic shadcn portfolio
- a Web3 landing page
- a terminal/CLI portfolio
- an AI-generated template
- a 3D/WebGL showcase
- an animation-heavy experiment

---

# 4. Visual Principles

## Creativity

Target approximately:

- 70% minimal
- 20% editorial/creative
- 10% visual surprise

Creativity should come primarily from:

- typography
- composition
- project presentation
- spacing
- transitions
- asymmetric layouts

Do not depend on:

- huge 3D scenes
- particle backgrounds
- excessive cursor effects
- autoplay video
- unnecessary WebGL
- excessive animation

## Typography

Use a modern, highly readable sans-serif.

Possible direction:

- Geist
- Inter
- Manrope

Do not use futuristic/sci-fi fonts.

Typography should be a major visual element, especially in the hero and project sections.

## Color

### Light mode

- warm/off-white background
- near-black text
- subtle gray borders/surfaces
- one restrained accent color

### Dark mode

- deep near-black background
- warm/off-white text
- muted surfaces
- same accent system

Dark mode must be intentionally designed, not implemented as a simple inversion/filter.

## Borders and surfaces

Prefer:

- subtle borders
- restrained shadows
- clean surfaces
- generous spacing

Avoid excessive cards, pills, gradients, and decorative containers.

---

# 5. Performance Requirements

Performance is a first-class product requirement, not a later optimization phase.

The portfolio must:

- load quickly on normal mobile connections
- minimize JavaScript
- minimize client components
- prefer server/static rendering where appropriate
- optimize all images
- use modern image formats where supported
- provide explicit image dimensions/aspect ratios
- lazy-load below-the-fold media
- optimize fonts
- avoid unnecessary third-party scripts
- avoid unnecessary analytics
- avoid loading screens
- avoid artificial delays
- avoid giant client-side visualizations
- remain usable without animation
- respect `prefers-reduced-motion`

Agents must treat performance requirements as acceptance criteria throughout development.

---

# 6. Information Architecture

## Primary route

`/`

Homepage sections:

1. Hero
2. Selected Work
3. Currently Building
4. About
5. Experience
6. Technology / Skills
7. Contact
8. Footer

## Project routes

Create dedicated case-study pages:

- `/projects/pixoree`
- `/projects/children-of-the-ummah`
- `/projects/skillbento`
- `/projects/paw-pals-rescue`

The homepage should remain the primary discovery experience.

---

# 7. Navigation

Keep navigation minimal.

Recommended navigation:

```text
Ahsan · Work · About · Contact · Theme Toggle
```

Requirements:

- Clicking the name/logo returns to `/`.
- No separate Home item is necessary.
- Navigation should remain simple on desktop.
- Mobile navigation must remain fast and unobtrusive.
- Theme toggle must support light and dark modes.

Do not add unnecessary navigation items.

---

# 8. Hero Section

The hero must immediately communicate:

1. who Ahsan is
2. what he does
3. what kind of products he builds
4. where the visitor should go next

Primary headline:

> **I build fast, scalable web products from idea to production.**

Supporting copy should communicate full-stack/product-building capability and may mention SaaS.

Primary CTA:

> **View my work**

Secondary CTA:

> **Download résumé**

The hero should not begin with:

- "Hello, I'm..."
- a giant portrait
- a generic developer slogan
- an overly long paragraph

## Hero visual direction

Use an editorial/asymmetric composition.

A subtle visual element may be used, but it must not compete with the headline.

No giant 3D scene or heavy WebGL.

---

# 9. Selected Work

This is the most important section of the homepage.

The portfolio currently has two primary shipped/live products that should receive the strongest visual treatment.

## Project 01 — Pixoree

Live:

`https://pixoree.app/`

Description:

An interactive design platform for creating:

- certificates
- resumes
- social posts
- presentations
- marketing materials

Important technical/product capabilities to communicate:

- Fabric.js canvas engine
- drag-and-drop editing
- layers
- rotation/scaling
- text/image manipulation
- undo/redo
- export
- modular responsive canvas toolbars

Suggested technology presentation:

- Next.js
- TypeScript
- React
- Fabric.js
- MongoDB

The case study should emphasize the complexity of building an interactive browser-based design tool.

## Project 02 — Children of the Ummah

Live:

`https://www.childrenoftheummah.org.uk/`

Description:

An international charity/donation platform.

Important capabilities:

- multi-currency donations
- GBP/USD/EUR
- custom donation forms
- recurring donations
- Stripe integration
- production deployment

The latest user-provided portfolio figure is approximately:

> **£43,000 / ~7.3M BDT processed**

This number should be presented as a current project metric only if the user confirms it remains current when the site is finalized.

The résumé contains an older figure of £37,500+ / ~6.2M BDT, so do not silently substitute one figure for another.

---

# 10. Project Presentation

Do not use a small generic project-card grid as the primary presentation.

Preferred structure:

```text
01

PIXOREE
Interactive design platform

[ LARGE PRODUCT VISUAL ]

Short product description

Technology

View case study →
```

Then:

```text
02

CHILDREN OF THE UMMAH
International charity platform

[ LARGE PRODUCT VISUAL ]

Short product description

Technology

View case study →
```

Project visuals should occupy significant screen space.

The section should communicate:

> These are real products, not tutorial projects.

---

# 11. Currently Building

Projects that are unfinished or do not have a public finished product should be explicitly separated from Selected Work.

## Skillbento

Status:

> In development

Concept:

A multi-tenant learning/community platform.

Modules include:

- Course Management
- Community Forums
- Event Management
- Appointment Scheduling
- Payment Processing

The project should communicate its architecture and scope without implying that the platform is finished or publicly launched.

The résumé describes a high-performance Go backend and MongoDB.

## Paw Pals Rescue

Purpose:

Animal rescue/adoption-related platform.

Repository:

`https://github.com/sowmik-sec/paw-pals-rescue-client`

This project should not be described with unsupported features.

Before writing the final case-study content, inspect the actual project/repository and document only features that can be verified.

---

# 12. Case Study Pages

Case studies should feel editorial rather than like technical documentation.

## Pixoree case study

Suggested structure:

1. Product overview
2. Problem / challenge
3. What was built
4. Interactive canvas architecture
5. Fabric.js implementation
6. Layers and transformations
7. Undo/redo
8. Export workflow
9. Responsive canvas/toolbars
10. Technology
11. Visuals/screenshots
12. Live product link

## Children of the Ummah case study

Suggested structure:

1. Product overview
2. Context
3. Role/contribution
4. Donation experience
5. Stripe/payment integration
6. Multi-currency support
7. Custom and recurring donations
8. Production considerations
9. Project metric, if verified
10. Technology
11. Visuals
12. Live product link

## Skillbento case study

Because it is in development:

- clearly label status
- explain product scope
- explain architecture
- explain modules
- explain technical decisions
- describe current progress
- do not invent production results

## Paw Pals Rescue case study

Create only after inspecting the actual project.

---

# 13. About Section

The About section should be the primary location for the professional headshot.

Do not put the face prominently in the hero.

The photo should be:

- professional
- formal shirt
- clean light-gray background
- relatively small compared with the surrounding content

The About section should communicate:

- Full Stack Developer identity
- product-building focus
- primary technologies
- current professional context
- links to GitHub/LinkedIn

Keep the copy concise.

---

# 14. Experience

Keep Experience intentionally compact.

Current role:

**Full Stack Developer — Deadlock Soft**

**July 2025 – Present**

The résumé describes work involving:

- Next.js
- TypeScript
- Go
- Tailwind
- MongoDB
- production web applications

Deadlock Soft should not become the visual centerpiece of the portfolio.

The project work should receive more visual emphasis.

Education:

**B.Sc. Engineering — Computer Science & Engineering**

Sylhet Engineering College

Graduated 2022

CGPA: 3.47 / 4.00

---

# 15. Skills

Do not use:

- percentage bars
- star ratings
- skill meters
- giant logo walls

Use grouped, text-based presentation.

Example:

```text
Frontend
React · Next.js · TypeScript · Tailwind · Fabric.js

Backend
Go · Node.js · REST APIs · Server Actions

Data & Payments
MongoDB · Stripe

Tools
Git · GitHub · Docker · Vercel
```

Only list technologies supported by the résumé/project evidence.

---

# 16. Contact

The contact section should feel like a strong closing statement.

Concept:

> Have something worth building?

Then:

- email
- GitHub
- LinkedIn

Avoid requiring a complicated contact form unless there is a concrete reason to add one.

Current email:

`sowmik.sec@gmail.com`

GitHub:

`https://github.com/sowmik-sec`

LinkedIn:

`https://www.linkedin.com/in/md-ahsan-habib-18569b21a/`

---

# 17. Resume

Do not create a dedicated Resume page initially.

Provide a prominent:

> **Download résumé**

button.

The portfolio should not simply reproduce the résumé. The website is intended to provide a richer product-oriented presentation.

---

# 18. Blog

Do not build a blog in the initial version.

A blog can be added later if there is a real publishing need.

Do not create empty infrastructure for a blog just because portfolios commonly have one.

---

# 19. Additional Projects

Do not create a giant project catalog.

Current structure:

### Selected Work

- Pixoree
- Children of the Ummah

### Currently Building

- Skillbento
- Paw Pals Rescue

A broader projects index can be added later when there are enough meaningful projects to justify it.

---

# 20. Content Rules

The portfolio must be factual.

Never:

- invent metrics
- invent features
- claim a project is live when it is not
- claim a project is finished when it is not
- invent client results
- invent performance benchmarks
- invent responsibilities
- exaggerate technology usage

When information is missing, mark it as a content requirement for the user/agent rather than fabricating it.

---

# 21. AI-Agent Development Requirements

The website is intended to be implemented primarily through AI coding agents.

Agents must work incrementally.

## Before coding

The agent should:

1. inspect the repository
2. inspect existing configuration
3. identify the framework/version
4. inspect package manager
5. inspect existing components
6. inspect existing assets
7. identify linting/formatting/testing setup
8. identify deployment configuration
9. identify whether reusable UI primitives already exist

Do not unnecessarily replace the existing stack.

## Development behavior

Agents should:

- make small coherent changes
- keep the application runnable
- verify changes after each major step
- avoid speculative abstractions
- avoid adding dependencies without justification
- reuse existing components when appropriate
- keep client-side JavaScript minimal
- preserve accessibility
- preserve responsive behavior
- preserve performance

---

# 22. Suggested Implementation Order

Agents should implement in this order:

### Phase 1 — Foundation

- inspect repository
- establish design tokens
- establish typography
- establish light/dark themes
- establish global layout
- establish navigation
- establish responsive breakpoints

### Phase 2 — Hero

- hero typography
- CTA buttons
- subtle visual element
- responsive behavior

### Phase 3 — Selected Work

- project data model
- Pixoree section
- Children of the Ummah section
- optimized project media
- project links

### Phase 4 — Project Pages

- Pixoree case study
- Children of the Ummah case study
- Skillbento case study
- Paw Pals case study after repository inspection

### Phase 5 — Currently Building

- Skillbento
- Paw Pals Rescue
- explicit project status indicators

### Phase 6 — About / Experience / Skills

- professional photo
- About content
- experience
- education
- skills

### Phase 7 — Contact / Footer

- contact CTA
- social links
- résumé download

### Phase 8 — Motion / Polish

- reveal animations
- hover interactions
- page transitions where useful
- reduced-motion support

### Phase 9 — Performance / Accessibility

- image optimization
- font optimization
- bundle review
- semantic HTML
- keyboard navigation
- contrast
- reduced motion
- mobile testing

### Phase 10 — Final QA

Test:

- desktop
- tablet
- mobile
- light mode
- dark mode
- keyboard navigation
- reduced-motion mode
- slow network
- broken/missing images
- external links
- résumé download
- all project routes
- 404 behavior

---

# 23. Animation Requirements

Animation level:

> Moderate / purposeful

Use animation for:

- section reveals
- project image movement
- hover states
- navigation transitions
- subtle page transitions

Avoid:

- animation before content becomes usable
- long entrance delays
- infinite decorative animations
- excessive parallax
- cursor-following effects everywhere
- animation that causes layout shift

All major animations must respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 24. Accessibility

Minimum requirements:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible buttons
- accessible navigation
- meaningful image alt text
- sufficient color contrast
- correct heading hierarchy
- reduced-motion support
- no interaction that depends exclusively on hover

---

# 25. SEO / Metadata

Implement:

- meaningful page titles
- meta descriptions
- Open Graph metadata
- Twitter/X card metadata where appropriate
- canonical URLs where appropriate
- semantic headings
- descriptive URLs
- favicon/site icon
- appropriate structured metadata if justified

Do not add SEO content purely for keyword stuffing.

---

# 26. Responsive Design

The design must be created responsively rather than shrinking desktop layouts.

Priority:

1. mobile
2. tablet
3. desktop
4. large desktop

Project visuals must remain strong on mobile.

Editorial/asymmetric layouts may collapse into a clean single-column composition on small screens.

---

# 27. Performance Acceptance Criteria

Before release:

- no unnecessary loading screen
- no unnecessary third-party scripts
- no huge unoptimized images
- no oversized JavaScript bundle caused by avoidable dependencies
- no layout shift caused by images/fonts
- project images lazy-loaded when appropriate
- interactive components loaded only when needed
- no unnecessary client components
- good Lighthouse/PageSpeed results should be treated as a validation target, not the only measure of performance

---

# 28. Content / Asset Requirements

The following assets/content need to be supplied or verified before final polish:

- final professional headshot
- résumé PDF for download
- final project screenshots
- final project metric for Children of the Ummah, if the ~£43k / ~7.3M BDT figure is to be displayed
- verified Paw Pals features
- final accent color
- final domain/production URL, if different from current links

Do not fabricate missing assets.

---

# 29. Current External Links

GitHub:

`https://github.com/sowmik-sec`

LinkedIn:

`https://www.linkedin.com/in/md-ahsan-habib-18569b21a/`

Pixoree:

`https://pixoree.app/`

Children of the Ummah:

`https://www.childrenoftheummah.org.uk/`

Paw Pals Rescue repository:

`https://github.com/sowmik-sec/paw-pals-rescue-client`

---

# 30. Non-Goals

Do not implement initially:

- blog
- giant project catalog
- elaborate CMS
- unnecessary authentication
- 3D/WebGL experience
- heavy particle systems
- complex custom cursor
- excessive analytics
- unnecessary contact backend
- skill percentage/rating system
- fake testimonials
- fake client logos
- fake statistics

---

# 31. Definition of Done

The portfolio is complete when:

- the visitor immediately understands that Ahsan is a Full Stack Developer
- the hero communicates the product-building positioning
- Pixoree and Children of the Ummah are the strongest project presentations
- unfinished projects are clearly marked as in development
- project case studies exist for the important work
- the professional photo appears in About rather than dominating the hero
- light and dark modes both look intentional
- the design feels creative without being gimmicky
- the site works well on mobile
- the site is fast
- navigation is intuitive
- résumé download works
- GitHub/LinkedIn/contact links work
- accessibility basics are satisfied
- no fabricated claims or metrics are present
- all major routes work
- performance has been reviewed before release

---

# 32. Design North Star

When an implementation decision is unclear, prioritize in this order:

1. **Clarity**
2. **Real project evidence**
3. **Performance**
4. **Typography and composition**
5. **Usability/accessibility**
6. **Subtle interaction**
7. **Decorative experimentation**

The portfolio should leave the visitor thinking:

> **This person builds real products.**

—not:

> **This person found a cool portfolio template.**
