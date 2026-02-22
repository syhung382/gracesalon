import { useState } from "react";

const PHONE = "#";
const ZALO_URL = "#";
const FACEBOOK_URL = "#";

const contacts = [
  {
    key: "facebook",
    label: "Facebook",
    href: FACEBOOK_URL,
    bg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.258h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "zalo",
    label: "Zalo",
    href: ZALO_URL,
    bg: "#0068FF",
    icon: (
      <svg viewBox="0 0 50 50" fill="white" width="24" height="24">
        <path d="M25 2C12.318 2 2 12.318 2 25c0 3.96 1.023 7.854 2.963 11.29L2.037 46.73a1 1 0 001.265 1.265l10.44-2.926A23 23 0 0025 48c12.682 0 23-10.318 23-23S37.682 2 25 2zm-8 13h16a1 1 0 010 2H17a1 1 0 010-2zm0 6h10a1 1 0 010 2H17a1 1 0 010-2zm16 8H17a1 1 0 010-2h16a1 1 0 010 2z" />
      </svg>
    ),
  },
  {
    key: "call",
    label: "Gọi Điện",
    href: `tel:${PHONE}`,
    bg: "#16a34a",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
      </svg>
    ),
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {/* Contact icons — shown when open */}
      {contacts.map((c, i) => (
        <a
          key={c.key}
          href={c.href}
          target={c.key !== "call" ? "_blank" : undefined}
          rel="noopener noreferrer"
          title={c.label}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: c.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            textDecoration: "none",
            transform: open
              ? "scale(1) translateY(0)"
              : "scale(0) translateY(20px)",
            opacity: open ? 1 : 0,
            transition: `all 0.3s cubic-bezier(0.34,1.56,0.64,1) ${open ? i * 0.06 : (contacts.length - 1 - i) * 0.04}s`,
            pointerEvents: open ? "auto" : "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.12) translateY(0)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1) translateY(0)";
          }}
        >
          {c.icon}
          {/* Tooltip label */}
          <span
            style={{
              position: "absolute",
              right: "62px",
              background: "rgba(11,31,58,0.85)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 400,
              padding: "5px 12px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              letterSpacing: "0.5px",
            }}
          >
            {c.label}
          </span>
        </a>
      ))}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        title="Liên hệ"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1B3F72, #2B6CB0)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(43,108,176,0.45)",
          cursor: "pointer",
          transition: "transform 0.35s, box-shadow 0.35s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(43,108,176,0.6)";
          e.currentTarget.style.transform = open
            ? "rotate(45deg) scale(1.08)"
            : "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(43,108,176,0.45)";
          e.currentTarget.style.transform = open
            ? "rotate(45deg)"
            : "rotate(0deg)";
        }}
      >
        {/* Plus / X icon */}
        <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
          <path
            d="M12 5v14M5 12h14"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Pulse ring animation when closed */}
        {!open && (
          <span
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              border: "2px solid rgba(43,108,176,0.4)",
              animation: "pulse-ring 2s ease-out infinite",
              pointerEvents: "none",
            }}
          />
        )}
      </button>

      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
