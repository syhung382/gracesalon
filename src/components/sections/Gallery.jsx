import { useState } from "react";
import { GALLERY } from "../../assets/data/gallery";
import FadeIn from "../common/FadeIn";
import SectionHeader from "../common/SectionHeader";

function GalleryItem({ bg, url, label, ratio, delay }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = url && !imgError;

  return (
    <FadeIn delay={delay}>
      <div className="gallery-item">
        {hasImage ? (
          <img
            src={url}
            alt={label}
            onError={() => setImgError(true)}
            style={{ width: "100%", display: "block", borderRadius: "16px" }}
          />
        ) : (
          <div style={{ width: "100%", aspectRatio: ratio, background: bg, borderRadius: "16px" }} />
        )}
        <div className="gallery-overlay">
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "22px",
            fontWeight: 300, color: "#fff", letterSpacing: "5px", textTransform: "uppercase",
          }}>
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
        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.id} {...item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
