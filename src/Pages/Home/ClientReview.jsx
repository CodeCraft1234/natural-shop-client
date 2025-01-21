import React, { useState, useEffect } from "react";

const ClientReview = () => {
  const reviews = [
    {
      id: 1,
      title: "আমাদের ক্লায়েন্ট রিভিউ",
      image: "https://i.ibb.co/wNVjXXD/Whats-App-Image-2025-01-20-at-23-31-30.jpg",
      footer: "মাকা পাউডার",
    },
    {
      id: 2,
      title: "আমাদের ক্লায়েন্ট রিভিউ",
      image: "https://i.ibb.co/d0K7XfW/Whats-App-Image-2025-01-20-at-23-31-31-1.jpg",
      footer: "মাকা পাউডার",
    },
    {
      id: 3,
      title: "আমাদের ক্লায়েন্ট রিভিউ",
      image: "https://i.ibb.co/jwrPWx6/Whats-App-Image-2025-01-20-at-23-31-31-2.jpg",
      footer: "মাকা পাউডার",
    },
    {
      id: 4,
      title: "আমাদের ক্লায়েন্ট রিভিউ",
      image: "https://i.ibb.co/8bBW11w/Whats-App-Image-2025-01-20-at-23-31-31.jpg",
      footer: "মাকা পাউডার",
    },
    {
      id: 5,
      title: "আমাদের ক্লায়েন্ট রিভিউ",
      image: "https://i.ibb.co/7RXyZtS/Whats-App-Image-2025-01-20-at-23-31-32.jpg",
      footer: "মাকা পাউডার",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;
  const totalSlides = reviews.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle Previous Slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
    );
  };

  // Handle Next Slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - visibleSlides ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-orange-100 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        কাস্টমার রিভিউ
      </h2>
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: `${(totalSlides / visibleSlides) * 100}%`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-1/3 flex-shrink-0 px-2 mr-0"
              style={{ width: "33.33%" }}
            >
              <div className="bg-white rounded-lg shadow-md">
                <div className="bg-yellow-500 text-center py-4 rounded-t-lg text-xl font-bold text-gray-800">
                  {review.title}
                </div>
                <img
                  src={review.image}
                  alt={`Review ${review.id}`}
                  className="w-full h-96 rounded-md"
                />
                <div className="bg-yellow-500 text-center py-2 rounded-b-lg text-gray-800 font-bold mt-2">
                  {review.footer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600"
        >
          →
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalSlides - visibleSlides + 1)].map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-yellow-500 w-4 h-4" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
