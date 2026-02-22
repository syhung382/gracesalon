import { GALLERY } from "../../assets/data/gallery";
import FadeIn from "../common/FadeIn";
import SectionHeader from "../common/SectionHeader";

function GalleryItem({ bg, label, ratio, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="gallery-item" style={{ aspectRatio: ratio }}>
        {/* Placeholder coloured div — swap for <img> when real photos are available */}
        <div style={{ width: "100%", height: "100%", background: bg, minHeight: "200px" }} />
        <div className="gallery-overlay">
          <span
            style={{
              fontFamily:   "var(--font-display)",
              fontSize:     "22px",
              fontWeight:   300,
              color:        "#fff",
              letterSpacing:"5px",
              textTransform:"uppercase",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Gallery() {
  return (
    <section id="hình-ảnh" style={{ padding: "120px 56px", background: "var(--white)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          label="Thư Viện Ảnh"
          title="Không Gian  Của Chúng Tôi"
          accent="Của Chúng Tôi"
        />

        <div
          className="gallery-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "16px",
          }}
        >
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.id} {...item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
