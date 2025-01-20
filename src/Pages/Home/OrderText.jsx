const OrderText = ({scrollToOrder}) => {
  return (
    <div className="bg-white py-8 px-4">
      {/* Order Button */}
      <div className="text-center mb-6">
        <button onClick={scrollToOrder} className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-2 px-6 rounded-full hover:from-red-700 hover:to-orange-600">
          এখনই অর্ডার করুন
        </button>
      </div>

      {/* Highlighted Section */}
      <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mx-auto max-w-2xl rounded-md text-center">
        <p className="text-orange-800 text-lg sm:text-xl font-semibold">
          মাকা রুট পাউডার তার প্রাকৃতিক গুণাবলির কারণে আধুনিক জীবনযাত্রায় এক
          ধরনের "সুপারফুড" হিসেবে পরিচিতি লাভ করেছে।
        </p>
      </div>

      {/* Question Section */}
      <div className="mt-6 text-center">
        <h2 className="text-gray-800 text-lg sm:text-xl font-semibold">
          মাকা রুট পাউডার কি? কেন আপনি 'Maca Root' খাবেন? খেলে কি কি উপকার হবে??
        </h2>
      </div>
    </div>
  );
};

export default OrderText;
