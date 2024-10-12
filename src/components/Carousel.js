"use client";
import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import Image from "next/image";
const Carousel = () => {
  const carousels = [
    {
        image: "/assests/parvati-valley.jpg",
        heading: "Discover the Majesty of Himachal",
      content: "Explore breathtaking landscapes and serene hill stations.",
    },
    {
      image: "/assests/dharamshala.jpg",
      heading: "Dharamshala: Where Spirituality Meets Serenity",
      content: "Dharamshala: The Little Lhasa of India",
    },
    {
      image: "/assests/carousel-manali.jpg",
      heading: "Adventure Awaits in Manali",
      content: "Enjoy trekking, paragliding, and vibrant local markets.",
    },
    {
      image: "/assests/shimla.jpg",
      heading: "Shimla: The Queen of Hills Awaits",
      content: "Discover Shimla: Where Heritage Meets Beauty",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  let playSlider;

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carousels.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carousels.length) % carousels.length);
  };

  // Auto-play functionality
  const startAutoPlay = () => {
    setIsPlaying(true);
    playSlider = setInterval(nextSlide, 3000); // Adjust speed as needed
  };

  

  // Handle play/pause button click


  // Use arrow keys and spacebar to control the carousel
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        prevSlide();
        break;
      case "ArrowRight":
        nextSlide();
        break;
      case " ":
        e.preventDefault();
        handlePlayPause();
        break;
      default:
        break;
    }
  };

  // Event listener for keypress
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 8000); // Change slide every 8 seconds

    return () => {
      clearInterval(autoSlide); // Clear interval when component unmounts
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="carousel-container" id="carousel-container">
      {/* Carousel image section */}
      {carousels.map((carousel, index) => (
        <div
          key={index}
          className={`carousel ${index == currentSlide ? "active" : ""}`}
        >
          <Image
            src={carousel.image}
            alt={carousel.heading}
            width={1000}
            height={1000}
          />
         <main className="content">
              <h1>{carousel.heading}</h1>
              <p>{carousel.content}</p>
        </main>
        </div>
      ))}

      {/* Previous & Next buttons */}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
    </div>
  );
};

export default Carousel;
