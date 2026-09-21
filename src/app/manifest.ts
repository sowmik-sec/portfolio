import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Ahsan Habib — Full Stack Developer",
    short_name: "Ahsan Habib",
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFBFA",
    theme_color: "#166534",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
