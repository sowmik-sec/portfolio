import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "Md. Ahsan Habib — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Studio palette — ink on gallery paper, no decoration beyond the
// registration marks that frame the card as an artboard.
const ink = "#17181C";
const secondary = "#494B52";
const muted = "#63656D";

async function loadFonts() {
  const fontsDir = path.join(process.cwd(), "src", "assets", "fonts");
  const [regular, italic] = await Promise.all([
    readFile(path.join(fontsDir, "InstrumentSerif-Regular.ttf")),
    readFile(path.join(fontsDir, "InstrumentSerif-Italic.ttf")),
  ]);
  return [
    {
      name: "Instrument Serif",
      data: regular,
      style: "normal" as const,
      weight: 400 as const,
    },
    {
      name: "Instrument Serif",
      data: italic,
      style: "italic" as const,
      weight: 400 as const,
    },
  ];
}

export default async function Image() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";
  const domain = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F6F3",
          padding: "104px 112px",
          fontFamily: "Instrument Serif",
          color: ink,
        }}
      >
        {/* Registration marks — the card is the artboard */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 56,
            width: 30,
            height: 30,
            borderTop: `2px solid ${secondary}`,
            borderLeft: `2px solid ${secondary}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 56,
            width: 30,
            height: 30,
            borderTop: `2px solid ${secondary}`,
            borderRight: `2px solid ${secondary}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 56,
            width: 30,
            height: 30,
            borderBottom: `2px solid ${secondary}`,
            borderLeft: `2px solid ${secondary}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 56,
            width: 30,
            height: 30,
            borderBottom: `2px solid ${secondary}`,
            borderRight: `2px solid ${secondary}`,
          }}
        />

        {/* Role line */}
        <p style={{ fontSize: 30, color: muted, margin: 0 }}>
          Full Stack Developer
        </p>

        {/* The statement — the name */}
        <h1
          style={{
            fontSize: 108,
            lineHeight: 1.02,
            letterSpacing: "-0.01em",
            margin: 0,
            display: "flex",
          }}
        >
          Md. Ahsan Habib
        </h1>

        {/* Availability line */}
        <p style={{ fontSize: 26, color: secondary, margin: 0 }}>
          {domain} — Dhaka, Bangladesh, remote worldwide
        </p>
      </div>
    ),
    {
      ...size,
      fonts: await loadFonts(),
    }
  );
}
