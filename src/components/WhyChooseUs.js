import React from "react";
import "../styles/WhyChooseUs.css";
import Image from "next/image";
import { BiSolidPlaneAlt } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <section className="why-us">
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
          <div className="card" style={{border: '1px solid #00000010'}}>
            <div className="icon">
            <Image
                src="/assests/earth-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1 className="h-one" style={{fontSize:'20px'}}>Easy Tour Booking</h1>
              <p className="para" style={{fontSize:'15px'}}>
                We believe in providing hassle free and convenient tour booking
                options to our guests. Tour booking can be done through our
                different portals which include our Toll Free
              </p>
            </div>
          </div>

          <div className="card" style={{border: '1px solid #00000010'}}>
            <div className="icon">
            <Image
                src="/assests/suitcase-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1 style={{fontSize:'20px'}}>Customizable Tour Packages</h1>
              <p style={{fontSize:'15px'}}>
              We understand our guests needs to perfection and thus provide them with
              flexible customized holiday packages according to their needs are requirements.
              </p>
            </div>
          </div>

          <div className="card" style={{border: '1px solid #00000010'}}>
            <div className="icon">
            <Image
                src="/assests/privacy-icon.png"
                width={300}
                height={300}
                layout="responsive"
                ></Image>
            </div>
            <div className="card-content">
              <h1 style={{fontSize:'20px'}}>Experienced Travel Consultants</h1>
              <p style={{fontSize:'15px'}}>
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
