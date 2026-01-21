import { useEffect, useState } from "react";

/**
 * useScrolled — returns true once the user scrolls past `offset` px.
 * @param {number} offset - scroll Y threshold in pixels
 * @returns {boolean}
 */
export function useScrolled(offset = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return scrolled;
}
