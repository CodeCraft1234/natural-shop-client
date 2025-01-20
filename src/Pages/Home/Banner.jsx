import React from 'react';

const Banner = ({scrollToOrder}) => {
  return (
    <div className="bg-[#583f1bd3] pt-5  px-4 md:px-12 lg:px-24 text-white text-center lg:py-12">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-8">
        <img
          src="https://i.ibb.co/PNMKyJz/Whats-App-Image-2024-09-06-at-01-04-31-c6d5471a.jpg"
          alt="Sotota Homeo Hall Logo"
          className="h-12 w-56 md:h-16 md:w-72 mr-2"
        />
      </div>

      {/* Main Text */}
      <div className="border rounded-lg border-4 border-white p-4 mb-8 inline-block">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          পার্শ্ব প্রতিক্রিয়াহীন হোমিওপ্যাথিক চিকিৎসা গ্রহণ করুন, নিরাপদ ও সুস্থ থাকুন।
        </h2>
      </div>

      {/* Subheading */}
      <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-8">
        ৪ টি অরিজিনাল জার্মানী মেডিসিন ও ১ টি মাশরুম পাওডার।
      </div>

      {/* Button */}
      <button
        onClick={scrollToOrder}
        className="bg-white text-green-800 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg inline-flex items-center"
      >
        অর্ডার করতে ক্লিক করুন
        <span className="ml-2">👉</span>
      </button>

      {/* YouTube Video Section */}

      <div className="mt-8 md:mt-12 flex justify-center">
        <iframe
          className="w-full h-64 md:w-[560px] md:h-[315px] lg:w-[890px] lg:h-[448px]"
          src="https://www.youtube.com/embed/X0E2F4KvmKs"
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
