import React from "react";
import Link from "next/link";
import "../styles/Footer.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="footer-content left">
        <div className="logo">
          <Image src="/assests/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="content">
          <h1>Himachal Tourism</h1>
          <p>
            Our primary goal is to bridge the gap between travelers and local
            property owners and service providers. We are committed to
            establishing strong connections that ensure all potential travelers
            to Himachal Pradesh can enjoy direct, seamless interactions with the
            people who matter most to their journey{" "}
          </p>
        </div>
        <div className="social-icon">
          <a target="_blank" href="https://www.facebook.com/mybharattrips/">
            <span className="icon">
              <FaFacebookF color="white" size={"15px"} />
            </span>
          </a>
          <a target="_blank" href="https://www.instagram.com/mybharattrips/">
            <span className="icon">
              <FaInstagram color="white" size={"15px"} />
            </span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/my-bharat-trips-023a73222/?originalSubdomain=in"
          >
            <span className="icon">
              <FaLinkedinIn color="white" size={"15Px"} />
            </span>
          </a>

          <a target="_blank" href={`https://wa.me/+917836098136`}>
            <span className="icon">
              <FaWhatsapp color="white" size={"15px"} />
            </span>
          </a>
        </div>
      </main>

      <main className="footer-content middle">
        <div className="content">
          <h1>Links</h1>
          <div className="links">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#packages">Packages</Link>
              </li>
              <li>
                <Link href="#destinations">Destination</Link>
              </li>
              <li>
                <Link href="#deals">Deals</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#services">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#expertise">Contact Us</Link>
              </li>
              <li>
                <Link href="/contact">Discounts</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <main className="footer-content right">
        <div className="content">
          <h1>Details</h1>
          <div className="links">
            <ul>
              <li>
                <span>Email</span>
                <Link href="mailto:sales@himachaltourismguide.in">sales@himachaltourismguide.in</Link>
              </li>
              <li>
                <span>Phone no:</span>
                <Link href="tel:+91 7836098136">+91 7836098136</Link>
              </li>
              <li className="hover">
                <span>Address</span>
                <Link href="tel:+91 7836098136">
                  Near stop n shop, Kelti, Himachal Pradesh Pin-code:171003
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
