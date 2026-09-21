import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Md. Ahsan Habib — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0C0E",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top label */}
        <span
          style={{
            fontSize: 22,
            color: "#94A3B8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          Md. Ahsan Habib · Portfolio
        </span>

        {/* Central Editorial Narrative */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "1020px",
          }}
        >
          {/* One accent gesture */}
          <div
            style={{
              width: "56px",
              height: "4px",
              backgroundColor: "#4ADE80",
            }}
          />
          <h1
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#F4F5F6",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            I build fast, scalable web products from idea to production.
          </h1>
          <p
            style={{
              fontSize: 26,
              color: "#9CA3AF",
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            Full-stack developer at Deadlock Soft. I take products from data model to deployed app — SaaS platforms, canvas tools, payment systems.
          </p>
        </div>

        {/* Footer Meta Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #23272F",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["Next.js", "TypeScript", "React", "Go", "Tailwind CSS", "MongoDB", "Stripe"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: 16,
                    color: "#F4F5F6",
                    backgroundColor: "#1A1D22",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    border: "1px solid #23272F",
                    fontFamily: "monospace",
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <span
            style={{
              fontSize: 18,
              color: "#6B7280",
              fontFamily: "monospace",
            }}
          >
            ahsanhabib.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
