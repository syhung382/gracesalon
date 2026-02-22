import FadeIn from "../common/FadeIn";
import { CONTACT_INFO, OPENING_HOURS } from "../../assets/data/gallery";

export default function Contact() {
  return (
    <section id="liên-hệ" style={{ padding: "120px 56px", background: "var(--navy)" }}>
      <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
        <div
          className="contact-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "80px",
            alignItems:          "start",
          }}
        >
          {/* ── Left: info ── */}
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
                Liên Hệ Với Chúng Tôi
              </div>

              <h2
                style={{
                  fontSize:     "clamp(36px, 4.5vw, 56px)",
                  fontWeight:   300,
                  letterSpacing:"-1px",
                  color:        "#FFFFFF",
                  marginBottom: "36px",
                  lineHeight:   1.1,
                }}
              >
                Đặt Lịch
                <br />
                <em style={{ fontStyle: "italic", color: "var(--blue-light)" }}>
                  Ngay Hôm Nay
                </em>
              </h2>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginBottom: "48px" }}>
                {CONTACT_INFO.map(({ icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontSize: "15px" }}>{icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize:   "14px",
                        fontWeight: 300,
                        color:      "rgba(206,224,246,0.6)",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Right: opening hours ── */}
          <FadeIn delay={0.2}>
            <div
              style={{
                padding:      "40px",
                background:   "rgba(43,108,176,0.08)",
                border:       "1px solid rgba(206,224,246,0.08)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontFamily:   "var(--font-body)",
                  fontSize:     "10px",
                  letterSpacing:"4px",
                  textTransform:"uppercase",
                  color:        "var(--blue-light)",
                  marginBottom: "28px",
                }}
              >
                Giờ Hoạt Động
              </div>
              {OPENING_HOURS.map(({ day, hours }) => (
                <div
                  key={day}
                  style={{
                    display:        "flex",
                    justifyContent: "space-between",
                    marginBottom:   "16px",
                    paddingBottom:  "16px",
                    borderBottom:   "1px solid rgba(206,224,246,0.06)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 300, color: "rgba(206,224,246,0.45)" }}>
                    {day}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, color: "rgba(206,224,246,0.85)" }}>
                    {hours}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop:    "28px",
                  padding:      "20px",
                  background:   "rgba(206,224,246,0.06)",
                  borderRadius: "8px",
                  textAlign:    "center",
                }}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(206,224,246,0.5)", marginBottom: "8px" }}>
                  Liên hệ nhanh qua
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 400, color: "var(--blue-light)", letterSpacing: "1px" }}>
                  📱 Zalo / Facebook / Gọi điện
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(206,224,246,0.35)", marginTop: "6px" }}>
                  Nhấn vào biểu tượng góc dưới bên phải màn hình
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

