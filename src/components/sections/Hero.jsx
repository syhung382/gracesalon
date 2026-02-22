import { useScrollTo } from "../../hooks/useScrollTo";
import { STATS } from "../../assets/data/gallery";
import Button from "../common/Button";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      style={{
        minHeight:  "100vh",
        background: "linear-gradient(145deg, #0B1F3A 0%, #1B3F72 50%, #2B6CB0 85%, #1B3F72 100%)",
        display:    "flex",
        alignItems: "center",
        justifyContent: "center",
        position:   "relative",
        overflow:   "hidden",
        padding:    "120px 56px 80px",
      }}
    >
      {/* ── Decorative rings ── */}
      <div style={{ position: "absolute", top: "8%", right: "6%", width: "420px", height: "420px", border: "1px solid rgba(206,224,246,0.12)", borderRadius: "50%", animation: "spin 45s linear infinite" }} />
      <div style={{ position: "absolute", top: "15%", right: "12%", width: "280px", height: "280px", border: "1px solid rgba(206,224,246,0.07)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "12%", left: "5%", width: "260px", height: "260px", background: "radial-gradient(circle, rgba(206,224,246,0.05) 0%, transparent 70%)", borderRadius: "50%", animation: "float 9s ease-in-out infinite" }} />
      <div style={{ position: "absolute", left: "56px", top: "18%", bottom: "18%", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(206,224,246,0.25), transparent)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, rgba(43,108,176,0.2) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* ── Content ── */}
      <div style={{ maxWidth: "880px", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Label */}
        <div
          style={{
            fontFamily:   "var(--font-body)",
            fontSize:     "10px",
            fontWeight:   400,
            letterSpacing:"7px",
            textTransform:"uppercase",
            color:        "var(--blue-light)",
            marginBottom: "28px",
            opacity:      0,
            animation:    "fadeUp 1s ease 0.2s forwards",
          }}
        >
          Spa & Vật Lý Trị Liệu Cao Cấp
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize:     "clamp(66px, 10vw, 114px)",
            fontWeight:   300,
            lineHeight:   0.88,
            color:        "#FFFFFF",
            letterSpacing:"-2px",
            marginBottom: "36px",
            opacity:      0,
            animation:    "fadeUp 1s ease 0.4s forwards",
          }}
        >
          Phục Hồi &
          <br />
          <em style={{ fontStyle: "italic", color: "var(--blue-light)", fontWeight: 300 }}>
            Tái Tạo
          </em>
        </h1>

        {/* Sub-text */}
        <p
          style={{
            fontFamily:   "var(--font-body)",
            fontSize:     "16px",
            fontWeight:   300,
            lineHeight:   1.9,
            color:        "rgba(206,224,246,0.7)",
            maxWidth:     "500px",
            margin:       "0 auto 52px",
            opacity:      0,
            animation:    "fadeUp 1s ease 0.6s forwards",
          }}
        >
          Không gian chăm sóc sức khỏe toàn diện — kết hợp vật lý trị liệu hiện đại
          và spa thư giãn để phục hồi cơ thể và tinh thần của bạn.
        </p>

        {/* Buttons */}
        <div
          className="hero-btns"
          style={{
            display:        "flex",
            gap:            "20px",
            justifyContent: "center",
            flexWrap:       "wrap",
            opacity:        0,
            animation:      "fadeUp 1s ease 0.8s forwards",
          }}
        >
          <Button
            style={{ background: "#fff", color: "var(--navy)", padding: "17px 44px" }}
            onClick={() => scrollTo("liên-hệ")}
          >
            Đặt Lịch Ngay
          </Button>
          <Button
            variant="outline"
            style={{ color: "#fff", borderColor: "rgba(206,224,246,0.45)" }}
            onClick={() => scrollTo("dịch-vụ")}
          >
            Dịch Vụ Của Chúng Tôi
          </Button>
        </div>

        {/* Stats */}
        <div
          className="hero-stats"
          style={{
            display:        "flex",
            justifyContent: "center",
            gap:            "72px",
            marginTop:      "88px",
            paddingTop:     "48px",
            borderTop:      "1px solid rgba(206,224,246,0.12)",
            opacity:        0,
            animation:      "fadeUp 1s ease 1s forwards",
          }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize:   "42px",
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
                  fontSize:     "10px",
                  letterSpacing:"3px",
                  textTransform:"uppercase",
                  color:        "rgba(206,224,246,0.4)",
                  marginTop:    "10px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
