import FadeIn from "../common/FadeIn";
import Button from "../common/Button";
import { ABOUT_STATS } from "../../assets/data/gallery";

function StatCard({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize:   "50px",
          fontWeight: 300,
          color:      "var(--blue-light)",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily:   "var(--font-body)",
          fontSize:     "11px",
          letterSpacing:"4px",
          textTransform:"uppercase",
          color:        "rgba(206,224,246,0.35)",
          marginTop:    "8px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 56px", background: "var(--navy)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "80px",
            alignItems:          "center",
          }}
        >
          {/* ── Left: text ── */}
          <FadeIn>
            <div>
              <div
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "10px",
                  letterSpacing:"6px",
                  textTransform:"uppercase",
                  color:        "var(--blue-light)",
                  marginBottom: "20px",
                }}
              >
                Our Story
              </div>

              <h2
                style={{
                  fontSize:     "clamp(36px, 4.5vw, 60px)",
                  fontWeight:   300,
                  lineHeight:   1.1,
                  letterSpacing:"-1px",
                  color:        "#FFFFFF",
                  marginBottom: "30px",
                }}
              >
                A Decade of
                <br />
                <em style={{ fontStyle: "italic", color: "var(--blue-light)" }}>
                  Refined Beauty
                </em>
              </h2>

              <p
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "15px",
                  fontWeight:   300,
                  lineHeight:   2,
                  color:        "rgba(206,224,246,0.6)",
                  marginBottom: "20px",
                }}
              >
                Founded in 2012, GraceSalon was born from a simple belief: every person
                deserves to feel extraordinary. Our team of internationally trained artists
                brings together decades of expertise in hair, skin, and wellness.
              </p>

              <p
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "15px",
                  fontWeight:   300,
                  lineHeight:   2,
                  color:        "rgba(206,224,246,0.6)",
                  marginBottom: "44px",
                }}
              >
                We use only the finest organic products, sourced from sustainable producers
                who share our commitment to beauty without compromise.
              </p>

              <Button
                style={{
                  background: "var(--blue-light)",
                  color:      "var(--navy)",
                  fontWeight: 500,
                }}
              >
                Discover Our Philosophy
              </Button>
            </div>
          </FadeIn>

          {/* ── Right: visual stats card ── */}
          <FadeIn delay={0.2}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  aspectRatio: "3/4",
                  background:  "linear-gradient(145deg, rgba(43,108,176,0.12), rgba(206,224,246,0.06))",
                  border:      "1px solid rgba(206,224,246,0.12)",
                  borderRadius:"24px",
                  display:     "flex",
                  alignItems:  "center",
                  justifyContent:"center",
                  overflow:    "hidden",
                  position:    "relative",
                }}
              >
                <div style={{ fontSize: "110px", opacity: 0.04, color: "#fff", position: "absolute" }}>
                  ✦
                </div>
                <div
                  style={{
                    display:       "flex",
                    flexDirection: "column",
                    alignItems:    "center",
                    gap:           "36px",
                    position:      "relative",
                    zIndex:        1,
                  }}
                >
                  {ABOUT_STATS.map((s) => (
                    <StatCard key={s.label} {...s} />
                  ))}
                </div>
              </div>

              {/* Decorative accents */}
              <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "130px", height: "130px", border: "1px solid rgba(206,224,246,0.15)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "72px", height: "72px", background: "var(--blue)", opacity: 0.18, borderRadius: "50%" }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
