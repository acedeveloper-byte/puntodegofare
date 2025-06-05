import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
