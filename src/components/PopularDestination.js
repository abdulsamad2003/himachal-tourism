import React from "react";
import "../styles/PopularDestination.css";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Image from "next/image";
import HappyCustomerCard from "./HappyCustomerCard";
const PopularDestination = () => {
  return (
    <>
        <section id="destinations" className="popular-destination">
      <div className="heading">
        <span className="small-heading">
          <BiSolidPlaneAlt color="blue" size={"25px"} />
          <h5>Most Popular Destination</h5>
        </span>
        <h1>Popular Destinations</h1>
      </div>

      <main className="gallery">
        <ul class="gallery-list">
          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/dharamshala.jpg"
                   layout="fill"
                objectFit="cover"
              />
              <h1>Dharamshala</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/dal-housie.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom center"
              />
              <h1>Dal Housie</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/chamba.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Chamba</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/parvati-valley.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Parvati Valley</h1>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <Image
                src="/assests/leh-ladakh.jpg"
                layout="fill"
                objectFit="cover"
              />
              <h1>Leh Ladakh</h1>
            </figure>
          </li>
        </ul>
      </main>
      
    </section>
    <section className="customer-card-container">
    <HappyCustomerCard 
        icon="/assests/customer-icon.png"
        heading="30000+"
        para="Happy customers across 30,000+ experiences"
      />
      
      <HappyCustomerCard 
        icon="/assests/rating-icon.png"
        heading="4.9/5"
        para="10,000+ verified reviews with 90% excellent score"
      />
      
      <HappyCustomerCard 
        icon="/assests/world-icon.png"
        heading="In the media"
        para="Recommended by Ministry of Tourism, lata, Himachal Tourism and others."
      />
      
      <HappyCustomerCard 
        icon="/assests/customer-service-icon.png"
        heading="24x7"
        para="Have a question? Live chat with local experts anywhere, anytime"
      />
    </section>
    </>

  );
};

export default PopularDestination;
