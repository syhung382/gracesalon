import FadeIn from "./FadeIn";

/**
 * SectionHeader — consistent section label + heading pair.
 *
 * Props:
 *   label: string     (small uppercase label above heading)
 *   title: string     (main heading text)
 *   accent: string    (word(s) to be italicized in blue)
 *   light: boolean    (true = white text, for dark backgrounds)
 *   center: boolean   (text-align center)
 */
export default function SectionHeader({
  label,
  title,
  accent,
  light = false,
  center = true,
}) {
  const headingColor = light ? "#FFFFFF" : "var(--navy)";
  const labelColor   = light ? "var(--blue-light)" : "var(--blue)";

  // Replace accent word with italic colored span
  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <em style={{ fontStyle: "italic", color: light ? "var(--blue-light)" : "var(--blue)" }}>
          {accent}
        </em>
        {parts[1]}
      </>
    );
  };

  return (
    <FadeIn style={{ textAlign: center ? "center" : "left", marginBottom: "80px" }}>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "10px",
          letterSpacing: "6px",
          textTransform: "uppercase",
          color: labelColor,
          marginBottom: "18px",
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontSize: "clamp(38px, 5.5vw, 70px)",
          fontWeight: 300,
          letterSpacing: "-1px",
          color: headingColor,
          lineHeight: 1,
        }}
      >
        {renderTitle()}
      </h2>
    </FadeIn>
  );
}
