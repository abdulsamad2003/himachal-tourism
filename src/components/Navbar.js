"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk, FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose, IoMdMail } from "react-icons/io";

import "../styles/Navbar.css";
import { sendGAEvent } from "@next/third-parties/google";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const [stickyNav, checkStickyNav] = useState("navbar");
  const [stickyHeader, checkStickyHeader] = useState("header");
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);
  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? checkStickyNav("stickyNav") : checkStickyNav("");
    }
  };
  const toggleAnimation = () => {
    !check ? checkStickyNav("stickyNav") : checkStickyNav("");
    setCheck(!check);
  };

  return (
    <>
    <header className={`header  ${stickyHeader}`}>
      <ul className="upper-fixed-links">
        <a target="_blank" href="mailto:sales@himachaltourismguide.in">
            <IoMdMail color="white"/>
          <li>sales@himachaltourismguide.in</li>
        </a>
        <a target="_blank" href="tel:+91 7836098136">
            <FaPhoneAlt color="white"/>
          <li>+91 7836098136</li>
        </a>
      </ul>
    </header>
    <nav className={`navbar  ${stickyNav}`}>
      <div className="logo">
        <Link href="/">
          <Image src="/assests/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div className={`  right-side ${check ? "nav-hidden" : ""}`}>
        <ul className="navLinks">
          <li onClick={toggleAnimation} >
            <Link  href="/">Home</Link>
          </li>
          <li onClick={toggleAnimation}>
            <Link href="#packages">Packages</Link>
          </li>
          <li onClick={toggleAnimation}>
            <Link href="#destinations">Destination</Link>
          </li>
          <li onClick={toggleAnimation}>
            <Link href="#deals">Deals</Link>
          </li>
        </ul>
        <a href="tel:+91 7836098136">
          <div className="contactButton">
            <button onClick={() => sendGAEvent('event', 'buttonClicked', { value: 'xyz' })}
              >(+91) 7836098136</button>
            <FaPhoneAlt color="white" />
          </div>
        </a>
      </div>
      <div className="nav-mobile">
        <div
          onClick={toggleAnimation}
          className={`nav-icon ${check ? "hidden" : ""}`}
        >
          <IoReorderThreeOutline size={"40px"} color="white" />
        </div>
        <div
          onClick={toggleAnimation}
          className={`nav-icon ${!check ? "hidden" : ""}`}
        >
          <IoMdClose size={"40px"} color="white" />
        </div>
      </div>
    </nav>
    </>
    
  );
};

export default Navbar;
