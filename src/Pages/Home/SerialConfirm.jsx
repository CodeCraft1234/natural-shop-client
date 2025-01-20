import React from 'react';

const SerialConfirm = ({scrollToOrder}) => {
  return (
    <div className="bg-[#f4ffec] px-4 py-8 md:px-16 md:py-10 border-4 rounded-xl border-dashed border-green-800">
      {/* Main Text */}
      <div className="text-center text-black bg-[#f4ffec] text-lg md:text-2xl font-bold mb-4 py-2">
        <span className="block">
        ডা'ক্তারের সিরিয়াল নিতে কল করুন / কুরিয়ারে মেডিসিন নিতে অর্ডার কনফার্ম করুন।
        </span>
      </div>

      {/* Location Section */}
      <div className="bg-red-800 py-6 md:py-10 text-white text-center p-4 md:p-6 mb-4 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold">আস্থা হোমিও হল</h1>
        <p className="text-lg md:text-xl">
আনসার একাডেমি ৩নং
গেইট,কালিয়াকৈর,গাজীপুর</p>
      </div>

      {/* Contact Section */}
      <div className="bg-red-800 text-white text-center text-xl md:text-2xl font-bold p-4 md:p-6 mb-4 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl font-semibold">মোবাইলঃ</h2>
        <p className="mt-2">📞 01840-601798
        </p>
        <p>📞 01709-049759</p>
      </div>

      {/* Buttons Section */}
      <div className="text-center mt-6 md:mt-4">
        <button
          onClick={scrollToOrder} // Add the scrollToOrder functionality here
          className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded shadow-lg mr-2 mb-4"
        >
          অর্ডার করতে ক্লিক করুন 👉
        </button>
        <button   >
        <a
            href="tel:01840-601798"
            className="bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center justify-center space-x-2 font-semibold"
          >
            <span>কল করতে ক্লিক করুন</span>
            <span className="ml-2">👉</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default SerialConfirm;
