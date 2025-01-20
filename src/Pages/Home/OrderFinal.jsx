import React from "react";

const OrderFinal = ({scrollToOrder}) => {
    const data = [
        { text: "মাকা রুট পাউডার যেহেতু কোন মেডিসিন না তাই এটা যে কোন ভাবে খাওয়া যায়।" },
        { text: "১ গ্রাম পানির সাথে ১ চামচ মাকা রুট পাউডার মিশিয়ে বাটার জুস করা যায়।" },
        { text: "সুপের সাথে মিশিয়ে খাওয়া যায়।" },
        { text: "প্রতিদিন ৪ গ্রাম করে ৫০ দিন খাওয়া যাবে।" },
      ];

  return (
    <div className="flex flex-col items-center py-10 px-5 bg-amber-50 mb-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">মাকা রুট পাউডার খাওয়ার নিয়ম-</h2>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-300 bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-orange-500 text-2xl">✔</div>
            <p className="text-gray-800 font-semibold mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <button onClick={scrollToOrder} className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90">
        এখনই অর্ডার করুন
      </button>
    </div>
  );
};



export default OrderFinal;
