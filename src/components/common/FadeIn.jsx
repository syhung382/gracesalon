import { useInView } from "../../hooks/useInView";

/**
 * FadeIn — wraps children in a fade-up animation when scrolled into view.
 * @param {React.ReactNode} children
 * @param {number} delay - animation delay in seconds
 * @param {string} className - optional extra class
 * @param {string} style - optional inline style override
 */
export default function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
