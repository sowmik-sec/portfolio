import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Ahsan Habib — Full Stack Developer",
    short_name: "Ahsan Habib",
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    start_url: "/",
    display: "standalone",
    // Studio palette: gallery paper + ink. Green stays a live-state
    // accent, so the browser chrome tint is ink.
    background_color: "#F7F6F3",
    theme_color: "#17181C",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
    ],
  };
}
