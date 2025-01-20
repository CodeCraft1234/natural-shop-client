const BannerFinal = ({scrollToOrder}) => {
  return (
    <div className="relative bg-[#d46927] overflow-hidden">
      {/* Top Text Section */}
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-relaxed">
          পুরুষের বা নারীর সেক্সুয়াল টাইম ৩/৪ গুন বৃদ্ধি <br />
          পাথ, রুচি শক্তি বৃদ্ধি পায়
        </h1>
        <p className="text-lg sm:text-xl md:text-4xl font-semibold mb-6">
          ১০০% প্রমাণিত
        </p>
        <button onClick={scrollToOrder} className="bg-[#b63b18] hover:bg-[#a83613] transition-transform duration-200 transform hover:scale-105 text-white font-bold py-3 px-8 rounded-full text-4xl">
          অর্ডার করুন
        </button>
      </div>

      {/* Image Section */}
      <div className="container mx-auto px-4 pb-16 flex justify-center">
        <div className="relative inline-block">
          <img
            src="https://i.ibb.co/3Tph52k/logo1.jpg" // Replace with your actual image URL
            alt="Product"
            className="rounded-lg shadow-md w-72 md:w-96 lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerFinal;
