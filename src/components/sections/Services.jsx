import { SERVICES } from "../../assets/data/services";
import FadeIn from "../common/FadeIn";
import SectionHeader from "../common/SectionHeader";

function ServiceCard({ icon, title, desc, price, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="service-card">
        <div style={{ fontSize: "26px", color: "var(--blue)", marginBottom: "22px" }}>
          {icon}
        </div>
        <h3
          style={{
            fontSize:     "23px",
            fontWeight:   400,
            marginBottom: "14px",
            color:        "var(--navy)",
            fontFamily:   "var(--font-display)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily:   "var(--font-body)",
            fontSize:     "14px",
            fontWeight:   300,
            lineHeight:   1.85,
            color:        "#4A6080",
            marginBottom: "24px",
          }}
        >
          {desc}
        </p>
        <div
          style={{
            fontFamily:   "var(--font-body)",
            fontSize:     "11px",
            letterSpacing:"3px",
            textTransform:"uppercase",
            color:        "var(--blue)",
            fontWeight:   500,
          }}
        >
          {price}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="dịch-vụ" style={{ padding: "120px 56px", background: "var(--offwhite)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          label="Dịch Vụ Của Chúng Tôi"
          title="Liệu Trình  Đặc Trị"
          accent="Đặc Trị"
        />

        <div
          className="services-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "24px",
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} {...service} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
