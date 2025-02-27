import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  // Calendar,
  // Book,
  // Users,
} from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images for the slider
  const backgroundImages = [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  // Stats that appear below the hero
  // const stats = [
  //   {
  //     icon: <Book className="w-6 h-6" />,
  //     value: "10,000+",
  //     label: "Books Available",
  //   },
  //   {
  //     icon: <Users className="w-6 h-6" />,
  //     value: "50,000+",
  //     label: "Active Members",
  //   },
  //   { icon: <Calendar className="w-6 h-6" />, value: "24/7", label: "Access" },
  // ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section with Slider */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image Slider */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transform transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent"></div>
          </div>
        ))}

        {/* Slider Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up space-y-8">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-md rounded-full text-blue-200 font-medium text-sm mb-4">
              Your Premier Learning Destination
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-100">
              Welcome to MyLibrary
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100/90 font-light max-w-3xl mx-auto">
              Your ideal study space for focused learning and success. Discover
              a world of knowledge at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Join Now
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative overflow-hidden px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Explore
                  <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </span>
              </button>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>


    </div>
  );
}
