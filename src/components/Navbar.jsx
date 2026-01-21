import { useScrolled } from "../hooks/useScrolled";
import { useScrollTo } from "../hooks/useScrollTo";
import { NAV_LINKS } from "../assets/data/gallery";
import Button from "./common/Button";

export default function Navbar() {
  const scrolled  = useScrolled(60);
  const scrollTo  = useScrollTo();

  return (
    <nav
      style={{
        position:       "fixed",
        top:            0,
        left:           0,
        right:          0,
        zIndex:         100,
        padding:        scrolled ? "14px 56px" : "26px 56px",
        background:     scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "none",
        transition:     "all 0.4s ease",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily:   "var(--font-display)",
          fontSize:     "24px",
          fontWeight:   300,
          letterSpacing:"5px",
          color:        scrolled ? "var(--navy)" : "#fff",
          userSelect:   "none",
          cursor:       "pointer",
        }}
        onClick={() => scrollTo("home")}
      >
        GRACE
        <span
          style={{
            color:      scrolled ? "var(--blue)" : "var(--blue-light)",
            fontWeight: 400,
          }}
        >
          SALON
        </span>
      </div>

      {/* Links */}
      <div
        className="nav-links"
        style={{ display: "flex", gap: "36px", alignItems: "center" }}
      >
        {NAV_LINKS.map((section) => (
          <span
            key={section}
            className="nav-link"
            onClick={() => scrollTo(section)}
            style={{ color: scrolled ? "var(--navy)" : "rgba(255,255,255,0.8)" }}
          >
            {section}
          </span>
        ))}

        <Button
          style={{
            padding:  "11px 26px",
            fontSize: "10px",
          }}
          onClick={() => scrollTo("contact")}
        >
          Book Now
        </Button>
      </div>
    </nav>
  );
}
