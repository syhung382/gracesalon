import { useEffect, useRef, useState } from "react";

/**
 * useInView — fires once when the element enters the viewport.
 * @param {number} threshold - intersection ratio (0–1)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
