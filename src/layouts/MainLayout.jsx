import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * MainLayout — wraps all pages with shared Navbar + Footer.
 */
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
