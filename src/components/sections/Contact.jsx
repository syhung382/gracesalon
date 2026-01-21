import { useState } from "react";
import FadeIn from "../common/FadeIn";
import Button from "../common/Button";
import { SERVICES } from "../../assets/data/services";
import { CONTACT_INFO, OPENING_HOURS } from "../../assets/data/gallery";

/* ── Reusable text input ── */
function FormField({ label, type = "text", placeholder, value, onChange }) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        style={{
          fontFamily:   "var(--font-body)",
          fontSize:     "10px",
          letterSpacing:"3px",
          textTransform:"uppercase",
          color:        "rgba(206,224,246,0.4)",
          display:      "block",
          marginBottom: "10px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width:        "100%",
          padding:      "13px 0",
          background:   "transparent",
          border:       "none",
          borderBottom: `1px solid ${focused ? "var(--blue-light)" : "rgba(206,224,246,0.18)"}`,
          color:        "#fff",
          fontFamily:   "var(--font-body)",
          fontSize:     "15px",
          fontWeight:   300,
          outline:      "none",
          transition:   "border-color 0.3s",
        }}
      />
    </div>
  );
}

/* ── Main Contact section ── */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", service: "" });
  };

  return (
    <section id="contact" style={{ padding: "120px 56px", background: "var(--navy)" }}>
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
                Reservations
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
                Book Your
                <br />
                <em style={{ fontStyle: "italic", color: "var(--blue-light)" }}>
                  Experience
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

              {/* Opening hours box */}
              <div
                style={{
                  padding:      "28px",
                  background:   "rgba(43,108,176,0.08)",
                  border:       "1px solid rgba(206,224,246,0.08)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     "10px",
                    letterSpacing:"4px",
                    textTransform:"uppercase",
                    color:        "var(--blue-light)",
                    marginBottom: "16px",
                  }}
                >
                  Opening Hours
                </div>
                {OPENING_HOURS.map(({ day, hours }) => (
                  <div
                    key={day}
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
                  >
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, color: "rgba(206,224,246,0.45)" }}>
                      {day}
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, color: "rgba(206,224,246,0.75)" }}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Right: form ── */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "26px" }}
            >
              <FormField
                label="Full Name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
              />
              <FormField
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
              />
              <FormField
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange("phone")}
              />

              {/* Service select */}
              <div>
                <label
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     "10px",
                    letterSpacing:"3px",
                    textTransform:"uppercase",
                    color:        "rgba(206,224,246,0.4)",
                    display:      "block",
                    marginBottom: "10px",
                  }}
                >
                  Service
                </label>
                <select
                  value={form.service}
                  onChange={handleChange("service")}
                  style={{
                    width:        "100%",
                    padding:      "13px 0",
                    background:   "transparent",
                    border:       "none",
                    borderBottom: "1px solid rgba(206,224,246,0.18)",
                    color:        "#fff",
                    fontFamily:   "var(--font-body)",
                    fontSize:     "15px",
                    outline:      "none",
                    appearance:   "none",
                    cursor:       "pointer",
                  }}
                >
                  <option value="" style={{ background: "var(--navy)" }}>
                    Choose a service...
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} style={{ background: "var(--navy)" }}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                type="submit"
                fullWidth
                style={{
                  marginTop:  "8px",
                  background: "var(--blue-light)",
                  color:      "var(--navy)",
                  padding:    "18px 40px",
                  fontSize:   "11px",
                  fontWeight: 500,
                }}
              >
                Request Appointment
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
