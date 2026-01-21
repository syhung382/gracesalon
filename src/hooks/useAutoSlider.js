import { useEffect, useState } from "react";

/**
 * useAutoSlider — cycles through indices automatically.
 * @param {number} length - total number of slides
 * @param {number} interval - ms between slides
 * @returns {[number, (i: number) => void]}
 */
export function useAutoSlider(length, interval = 4500) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % length),
      interval
    );
    return () => clearInterval(timer);
  }, [length, interval]);

  return [active, setActive];
}
