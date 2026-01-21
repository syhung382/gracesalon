/**
 * useScrollTo — returns a helper to smoothly scroll to a section by id.
 * @returns {(id: string) => void}
 */
export function useScrollTo() {
  return (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
}
