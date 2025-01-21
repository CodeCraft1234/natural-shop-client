import React from "react";

const OrderFull = () => {
  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Call Section */}
      <div className="bg-orange-100 text-center py-4 px-6 rounded-md w-full max-w-4xl shadow-md">
        <p className="text-lg md:text-xl font-medium text-gray-700">
          প্রয়োজন হলে কল করুন:{" "}
          <span className="text-red-600 font-bold">01601-675007</span>
        </p>
      </div>

      {/* Pricing Section */}
      <div className="border border-red-400 rounded-md w-full max-w-4xl mt-6 p-6 shadow-md bg-white">
        <p className="text-lg md:text-xl font-semibold text-gray-800 text-center">
          <span className=" text-gray-800 mr-2">প্রিমিয়াম</span>
          MACA ROOT পাউডার 300 গ্রাম =
          <span className="relative inline-block mx-2">
            <span className="border-2 border-red-500 px-2 py-1 rounded-full text-red-600 font-bold text-xl">
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
