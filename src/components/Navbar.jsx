import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled";
import { useScrollTo } from "../hooks/useScrollTo";
import { NAV_LINKS } from "../assets/data/gallery";
import Button from "./common/Button";

export default function Navbar() {
  const scrolled  = useScrolled(60);
  const scrollTo  = useScrollTo();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          padding:        scrolled ? "14px 56px" : "26px 56px",
          background:     scrolled || menuOpen ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
          borderBottom:   scrolled || menuOpen ? "1px solid var(--border)" : "none",
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
            color:        scrolled || menuOpen ? "var(--navy)" : "#fff",
            userSelect:   "none",
            cursor:       "pointer",
          }}
          onClick={() => handleNav("home")}
        >
          GRACE
          <span style={{ color: scrolled || menuOpen ? "var(--blue)" : "var(--blue-light)", fontWeight: 400 }}>
            SPA
          </span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {NAV_LINKS.map((section) => (
            <span
              key={section}
              className="nav-link"
              onClick={() => handleNav(section)}
              style={{ color: scrolled ? "var(--navy)" : "rgba(255,255,255,0.8)" }}
            >
              {section.replace(/-/g, " ")}
            </span>
          ))}
          <Button style={{ padding: "11px 26px", fontSize: "10px" }} onClick={() => handleNav("liên-hệ")}>
            Đặt Lịch
          </Button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          style={{
            display:        "none",
            background:     "none",
            border:         "none",
            cursor:         "pointer",
            padding:        "6px",
            flexDirection:  "column",
            gap:            "5px",
            alignItems:     "center",
            justifyContent: "center",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display:         "block",
                width:           "24px",
                height:          "2px",
                background:      scrolled || menuOpen ? "var(--navy)" : "#fff",
                borderRadius:    "2px",
                transition:      "all 0.3s ease",
                transformOrigin: "center",
                transform:
                  menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "scaleX(0)"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          right:         0,
          zIndex:        99,
          background:    "rgba(255,255,255,0.98)",
          backdropFilter:"blur(20px)",
          padding:       "88px 32px 40px",
          display:       "flex",
          flexDirection: "column",
          gap:           "4px",
          boxShadow:     "0 20px 60px rgba(11,31,58,0.12)",
          transform:     menuOpen ? "translateY(0)" : "translateY(-110%)",
          transition:    "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom:  "1px solid var(--border)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {NAV_LINKS.map((section, i) => (
          <button
            key={section}
            onClick={() => handleNav(section)}
            style={{
              fontFamily:      "var(--font-body)",
              fontSize:        "15px",
              fontWeight:      400,
              letterSpacing:   "0.5px",
              textTransform:   "capitalize",
              color:           "var(--navy)",
              background:      "none",
              border:          "none",
              borderBottom:    i < NAV_LINKS.length - 1 ? "1px solid var(--border)" : "none",
              textAlign:       "left",
              padding:         "16px 0",
              cursor:          "pointer",
              opacity:         menuOpen ? 1 : 0,
              transform:       menuOpen ? "translateX(0)" : "translateX(-16px)",
              transition:      `color 0.2s, padding-left 0.2s, opacity 0.3s ${menuOpen ? i * 0.05 + 0.15 : 0}s, transform 0.3s ${menuOpen ? i * 0.05 + 0.15 : 0}s`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--blue)"; e.currentTarget.style.paddingLeft = "8px"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--navy)"; e.currentTarget.style.paddingLeft = "0"; }}
          >
            {section.replace(/-/g, " ")}
          </button>
        ))}

        <button
          onClick={() => handleNav("liên-hệ")}
          style={{
            marginTop:     "16px",
            padding:       "15px",
            background:    "var(--blue-dark)",
            color:         "#fff",
            border:        "none",
            fontFamily:    "var(--font-body)",
            fontSize:      "12px",
            fontWeight:    500,
            letterSpacing: "3px",
            textTransform: "uppercase",
            cursor:        "pointer",
            borderRadius:  "2px",
            opacity:       menuOpen ? 1 : 0,
            transition:    `opacity 0.3s ${menuOpen ? "0.4s" : "0s"}`,
          }}
        >
          Đặt Lịch Ngay
        </button>
      </div>

      {/* Overlay đóng menu khi click ngoài */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position:   "fixed",
            inset:      0,
            zIndex:     98,
            background: "rgba(0,0,0,0.15)",
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; }
          .nav-links  { display: none !important; }
          nav { padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
}
