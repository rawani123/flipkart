"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

  // Array of images to be displayed in the carousel
  const slides = [
    { src: "/img1.jpg", height: 1000, width: 1700, alt: "Image 1" },
    { src: "/img2.jpg",height: 1000, width: 1700, alt: "Image 2" },
    { src: "/img3.webp", height: 1000, width: 1700, alt: "Image 3" },
    { src: "/img4.webp", height: 1000, width: 1700, alt: "Image 4" },
    { src: "/img5.webp", height: 1000, width: 1700, alt: "Image 5" },
    { src: "/img6.webp", height: 1000, width: 1700, alt: "Image 6" },
    // Add more images as needed
  ];

  useEffect(() => {
    // Function to automatically move to the next slide every 5 seconds
    const interval = setInterval(() => {
      moveToNextSlide();
    }, 5000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentSlide]);

  // Function to move to the next slide
  const moveToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  // Function to move to the previous slide
  const moveToPrevSlide = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-30 overflow-hidden rounded-lg md:h-96">
        {/* Render current slide */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src={slides[currentSlide].src}
            height={slides[currentSlide].height}
            width={slides[currentSlide].width}
            className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={slides[currentSlide].alt}
          />
        </div>
      </div>

      {/* Navigation buttons for the carousel */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {/* Previous button */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={moveToPrevSlide}
        ></button>
        
        {/* Next button */}
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={moveToNextSlide}
        ></button>
      </div>

      {/* Previous and Next buttons for carousel */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={moveToPrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          {/* Previous icon */}
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={moveToNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          {/* Next icon */}
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
