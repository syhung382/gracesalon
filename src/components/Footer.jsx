import { useScrollTo } from "../hooks/useScrollTo";
import { NAV_LINKS } from "../assets/data/gallery";

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer
      style={{
        padding:    "52px 56px",
        background: "var(--navy-deep)",
        textAlign:  "center",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily:   "var(--font-display)",
          fontSize:     "22px",
          fontWeight:   300,
          letterSpacing:"5px",
          color:        "#FFFFFF",
          marginBottom: "20px",
          cursor:       "pointer",
        }}
        onClick={() => scrollTo("home")}
      >
        GRACE
        <span style={{ color: "var(--blue-light)", fontWeight: 400 }}>SALON</span>
      </div>

      {/* Divider */}
      <div
        style={{
          width:        "40px",
          height:       "1px",
          background:   "rgba(206,224,246,0.18)",
          margin:       "0 auto 24px",
        }}
      />

      {/* Nav links */}
      <div
        style={{
          display:      "flex",
          gap:          "36px",
          justifyContent:"center",
          marginBottom: "32px",
          flexWrap:     "wrap",
        }}
      >
        {NAV_LINKS.map((s) => (
          <span
            key={s}
            className="nav-link"
            onClick={() => scrollTo(s)}
            style={{ color: "rgba(206,224,246,0.3)" }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          fontFamily:   "var(--font-body)",
          fontSize:     "11px",
          fontWeight:   300,
          color:        "rgba(206,224,246,0.18)",
          letterSpacing:"1px",
        }}
      >
        © {new Date().getFullYear()} GraceSalon. All rights reserved. Crafted with care.
      </p>
    </footer>
  );
}
