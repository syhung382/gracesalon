import { TESTIMONIALS } from "../../assets/data/testimonials";
import { useAutoSlider } from "../../hooks/useAutoSlider";
import FadeIn from "../common/FadeIn";

function TestimonialSlide({ text, name, role, isActive }) {
  return (
    <div
      style={{
        opacity:       isActive ? 1 : 0,
        transform:     isActive ? "translateY(0)" : "translateY(16px)",
        transition:    "all 0.7s ease",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div
        style={{
          fontSize:     "56px",
          color:        "var(--blue)",
          marginBottom: "20px",
          opacity:      0.25,
          lineHeight:   1,
          fontFamily:   "var(--font-display)",
        }}
      >
        "
      </div>
      <p
        style={{
          fontFamily:   "var(--font-display)",
          fontSize:     "clamp(18px, 3vw, 26px)",
          fontWeight:   300,
          fontStyle:    "italic",
          lineHeight:   1.75,
          color:        "var(--navy)",
          marginBottom: "36px",
        }}
      >
        {text}
      </p>
      <div
        style={{
          fontFamily:   "var(--font-body)",
          fontSize:     "12px",
          fontWeight:   500,
          letterSpacing:"3px",
          textTransform:"uppercase",
          color:        "var(--blue-dark)",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily:   "var(--font-body)",
          fontSize:     "12px",
          fontWeight:   300,
          color:        "rgba(43,108,176,0.55)",
          marginTop:    "6px",
        }}
      >
        {role}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useAutoSlider(TESTIMONIALS.length, 4500);

  return (
    <section
      id="đánh-giá"
      style={{ padding: "120px 56px", background: "var(--blue-mid)" }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div
            style={{
              fontFamily:   "var(--font-body)",
              fontSize:     "10px",
              letterSpacing:"6px",
              textTransform:"uppercase",
              color:        "var(--blue)",
              marginBottom: "18px",
            }}
          >
            Khách Hàng Nói Gì
          </div>
          <h2
            style={{
              fontSize:     "clamp(38px, 4.5vw, 62px)",
              fontWeight:   300,
              letterSpacing:"-1px",
              color:        "var(--navy)",
              marginBottom: "64px",
            }}
          >
            Cảm Nhận{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Thật</em>
          </h2>
        </FadeIn>

        {/* Slider */}
        <div style={{ position: "relative", minHeight: "240px" }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              style={{
                position: i === 0 ? "relative" : "absolute",
                top: 0, left: 0, right: 0,
              }}
            >
              <TestimonialSlide {...t} isActive={active === i} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display:        "flex",
            gap:            "12px",
            justifyContent: "center",
            marginTop:      "48px",
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
