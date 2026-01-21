/**
 * Button — reusable button component with primary / outline variants.
 *
 * Props:
 *   variant: "primary" | "outline"
 *   onClick: () => void
 *   style: CSSProperties (override)
 *   children: React.ReactNode
 *   type: "button" | "submit"
 *   fullWidth: boolean
 */
export default function Button({
  children,
  variant = "primary",
  onClick,
  style = {},
  type = "button",
  fullWidth = false,
}) {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";
  return (
    <button
      type={type}
      className={base}
      onClick={onClick}
      style={{ width: fullWidth ? "100%" : undefined, textAlign: fullWidth ? "center" : undefined, ...style }}
    >
      {children}
    </button>
  );
}
