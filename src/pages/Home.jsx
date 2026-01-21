import Hero         from "../components/sections/Hero";
import Services     from "../components/sections/Services";
import About        from "../components/sections/About";
import Gallery      from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import Contact      from "../components/sections/Contact";

/**
 * HomePage — assembles all landing page sections in order.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
