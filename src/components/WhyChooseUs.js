import React from "react";
import "../styles/WhyChooseUs.css";
import Image from "next/image";
import { BiSolidPlaneAlt } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="left-img">
        <Image
          src="/assests/why-choose-us.png"
          width={100}
          height={100}
          layout="responsive"
        ></Image>
      </div>

      <div className="why-us-content">
        <div className="heading">
          <span className="small-heading">
            <BiSolidPlaneAlt color="blue" size={"25px"} />
            <h5>Why Choose Us</h5>
          </span>
          <h1>Why Choose Us</h1>
          <p>Enjoy different experiences in every place you visit </p>
          <p>and discover new and affordable adventures of course.</p>
        </div>

        <div className="choose-us-card">
          <div className="card">
            <div className="icon">
            <Image
                src="/assests/earth-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1>Easy Tour Booking</h1>
              <p>
                We believe in providing hassle free and convenient tour booking
                options to our guests. Tour booking can be done through our
                different portals which include our Toll Free
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
            <Image
                src="/assests/suitcase-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1>Customizable Tour Packages</h1>
              <p>
              We understand our guests needs to perfection and thus provide them with
              flexible customized holiday packages according to their needs are requirements.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
            <Image
                src="/assests/privacy-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1>Experienced Travel Consultants</h1>
              <p>
              We understand our guests needs to perfection and thus provide them with flexible customized holiday packages according to their needs are requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
