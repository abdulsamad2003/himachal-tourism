"use client"
import React,{useState} from "react";
import "../styles/PackageCard.css";
import Image from "next/image";
import packageData from "../../public/PackageData/packageData.json"; // Import the JSON file
import RightTick from "../../public/assests/right-tick.png"
import PopupForm from "./PopupForm";
const PackageCard = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage popup visibility

  const openPopup = () => {
    setIsPopupVisible(true); // Function to open the popup
  };

  return (
    <>
        <PopupForm isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />

       <section className="packageCardContainer">
      {packageData.map((packageItem) => (
        <div key={packageItem.id}> {/* Add key here */}
          <main className="packageCard">
            <div className="image-container">
              <div className="upper-photo">
                <Image
                  src={packageItem.image1}
                  alt={packageItem.title}
                  width={180}
                  height={200}
                />
              </div>
              <div className="below-photo">
                <Image
                  src={packageItem.image2}
                  alt={packageItem.title}
                  width={90}
                  height={100}
                />
                <Image
                  src={packageItem.image3}
                  alt={packageItem.title}
                  width={90}
                  height={100}
                />
              </div>
            </div>

            <div className="card-content">
              <h2>{packageItem.title}</h2>
              <p>Tour Duration: {packageItem.duration}</p>
              <p>Places Covered: {packageItem.placesCovered}</p>

              <div className="pricing">
                <h4>{packageItem.price}</h4>
                <span>{packageItem.originalPrice}</span>
                <h5>{packageItem.discount}</h5>
              </div>
              
              <ul className="services">
                {packageItem.services.map((service, index) => (
                  <li key={index}>
                    <span>
                      <Image
                        src={RightTick}
                        width={8}
                        height={8}
                      />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <div className="service-booking-buttons">
                  <div className="contactButton">
                    <button onClick={openPopup} >Enquiry Now</button>
                  </div>             
                <div className="contactButton">
                  <a href="tel:+91 7836098136"><button>Call Now</button></a>
                </div>
              </div>
            </div>
          </main>
        </div>
      ))}
    </section>


    </>
 
  );
};

export default PackageCard;
