import React from "react";

const OrderCard = ({ scrollToOrder }) => {
    const data = [
        { text: "মাকা রুট পাউডার হলো একটি সুপারফুড" },
        { text: "মাকা রুট পাউডার খেলে যৌন মিলনের আকাঙ্খা বাড়াবে বহু গুণে" },
        { text: "৯০% দ্রুত বীর্যপাত রোধ করবে" },
        { text: "হস্তমৈথুনের অযাচিত অভ্যাস থাকলে ৯৯% উপকার করে গ্যারান্টি।" },
        { text: "শুক্রাণু পরিমাণ ৮০% বৃদ্ধি করবে" },
        { text: "লিঙ্গ সতেজ, লিঙ্গ মোটা, লিঙ্গ বড় ও স্বাস্থ্যবান করবে ইনশাআল্লাহ" },
        { text: "শারীরিকভাবে দুর্বলতা দূর করবে নিমিষেই" },
        { text: "বীর্য পাতলা থাকলে ঘন করবে ৯৯%" },
      ];

  return (
    <div className="flex flex-col items-center py-10 px-5 bg-white">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <div className="text-orange-500 text-2xl">✔</div>
            <p className="text-gray-800 font-semibold mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <button
        onClick={scrollToOrder}
        className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90"
      >
        দ্রুত অর্ডার করুন
      </button>

       {/* Image Section */}
       <div className="container mx-auto px-4 pb-16 flex justify-center mt-4">
        <div className="relative inline-block">
          <img
            src="https://i.ibb.co.com/6ZBJYfF/logo3.jpg" // Replace with your actual image URL
            alt="Product"
            className="rounded-lg shadow-md w-72 md:w-96 lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};



export default OrderCard;
