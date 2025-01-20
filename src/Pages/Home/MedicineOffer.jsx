import React from 'react';

const MedicineOffer = ({scrollToOrder}) => {
  return (
    <div className="py-5 px-4 lg:rounded-xl md:my-10 md:mx-12 lg:mx-16 lg:py-10  lg:my-16 bg-[#583f1bd3] flex flex-col items-center justify-center">
      {/* Upper Section */}
      <div className="w-full mb-6">
        <div className="bg-red-900 lg:my-4 lg:mt-10 mx-2 md:mx-4 rounded-lg lg:mb-4 text-center">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl py-6 md:py-8 lg:py-10 font-bold">
            মেডিসিন খাওয়ার নিয়ম প্রেসক্রিপশনে লেখা থাকবে।
          </h1>
        </div>
        <p className="text-white text-center text-lg md:text-xl lg:text-2xl py-6 md:py-8 lg:py-10 font-semibold">
          দীর্ঘ ১৮ বছর যাবত সুনামের সহিত চিকিৎসা সেবা দিয়ে আসছে আস্থা হোমিও হল।
        </p>
      </div>

      {/* Offer Details Section */}
      <div className="w-full md:max-w-2xl lg:max-w-4xl bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        <p className="text-green-700 line-through text-center text-sm md:text-base lg:text-lg font-bold mb-2">
          মোট ৫ টি মেডিসিনের রেগুলার মূল্য- ২৪৫০  টাকা মাত্র
        </p>

        <hr className="border-dotted border-2 border-green-600 mb-4" />

        <p className="text-green-700 text-center text-sm md:text-base lg:text-lg font-bold">
          যৌন কোর্স মোট ৫ টি মেডিসিনের অফার মূল্য - ২০০০/=
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          {/* Order Button */}
          <button onClick={scrollToOrder} className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center justify-center space-x-2 font-semibold">
            <span>অর্ডার করতে ক্লিক করুন</span>
            <span className="ml-2">👉</span>
          </button>
          {/* Call Button */}
          <button className="bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center justify-center space-x-2 font-semibold">
          <a
            href="tel:01840-601798"
            
          >
            <span>কল করতে ক্লিক করুন</span>
            <span className="ml-2">👉</span>
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineOffer;
