import React from 'react';

const Banner = ({scrollToOrder}) => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 pt-5  px-4 md:px-12 lg:px-24 text-white text-center lg:py-12">
      


      {/* Subheading */}
      {/* Logo Section */}
      {/* Image Section */}
      <div className="container mx-auto px-4 pb-16 flex justify-center mt-4">
        <div className="relative inline-block">
          <img
            src="https://i.ibb.co.com/kD1vr1c/maca-post-2-1024x1024.png" // Replace with your actual image URL
            alt="Product"
            className="rounded-lg shadow-md w-72 md:w-96 lg:w-[600px]"
          />
        </div>
      </div>

      
      {/* Main Text */}
      <div className="border rounded-lg border-4 border-white p-4 mb-8 inline-block">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
        মাকা রুট সম্পর্কে ডাক্তার জাহাঙ্গীর কবির স্যার এর মতামত শুনুন ভিডিও চালু করে 👇👇
        </h2>
      </div>

      {/* Button */}
      <button
        onClick={scrollToOrder}
        className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90"
      >
        অর্ডার করতে ক্লিক করুন
        <span className="ml-2">👉</span>
      </button>

      {/* YouTube Video Section */}

      <div className="mt-8 md:mt-12 flex justify-center">
        <iframe
          className="w-full h-64 md:w-[560px] md:h-[315px] lg:w-[890px] lg:h-[448px]"
          src="https://www.youtube.com/embed/_H4hWNrYd8o?si=eynO7QaQx12rP1W4"
          title="স্থায়ী ভাবে সহবাসের সময় প্রায় ২০ - ২৫ মিনিট বৃদ্ধি করুন। Permanently increase intercourse time"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
};

export default Banner;
