import React from "react";

const OrderFull = () => {
  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Call Section */}
      <div className="bg-[#fdf9f2] text-center py-4 px-6 rounded-md w-full max-w-6xl">
        <p className="text-lg md:text-xl font-medium text-gray-700">
          প্রয়োজন হলে কল করুন:{" "}
          <span className="text-red-500 font-bold">01601-675007</span>
        </p>
      </div>

      {/* Pricing Section */}
      <div className="border border-red-300 rounded-md w-full max-w-6xl mt-6 p-4 flex flex-col items-center">
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          <span className=" text-gray-500 mr-2">প্রিমিয়াম</span>{" "}
          MACA ROOT পাউডার 300 গ্রাম =
          <span className="text-black font-bold text-xl px-2 relative">
            <span className="border-2 border-brown-700 rounded-full px-2">
              1590
            </span>
          </span>
          টাকা
        </p>
      </div>
    </div>
  );
};

export default OrderFull;
