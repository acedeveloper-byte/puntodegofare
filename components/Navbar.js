import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [navbar, setNavbar] = useState("navbar");
  const changeBackground = () => {
    if (window.scrollY >= 0.5) {
      setNavbar("sticky");
    } else {
      setNavbar("navbar");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  function handleClick() {
    setMobileNavOpen(!isMobileNavOpen);
    setActive(!isActive);
  }

  return (
    <>
      <div class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class={navbar}>
          <Link href="/">
            <img src="/images/logo.png" alt="Company Logo" />
          </Link>
          <div
            class={`menu-toggle ${isActive ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleClick}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class={`nav ${isMobileNavOpen ? "mobile-nav" : ""}`}>
            <li class="nav-item" style={{ textAlign: "center" }}>
              <Link href="/">Hogar</Link>
            </li>
            <li class="nav-item" style={{ textAlign: "center" }}>
              <Link href="/about">Sobre nosotros</Link>
            </li>
            {/* <li class="nav-item" style={{textAlign:"center"}}><a href="#">Why Us</a></li> */}
            <li class="nav-item contact-btn" style={{ textAlign: "center" }}>
              <Link href="/contact">Contacta con nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
