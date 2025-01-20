import React from 'react';

const CommissionBenefits = ({scrollToOrder}) => {
  return (
    <div className=" bg-green-100 flex justify-center items-center py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 flex flex-col md:flex-row justify-between gap-8 md:gap-14">
        {/* Left Column */}
        <div className="w-full md:w-2/3">
          <div className="border-2 border-green-600 rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-bold text-green-900 text-center border-b-2 border-green-600 pb-2 mb-4">
              আমাদের কম্বিনেশন ঔষধের বৈশিষ্ট্যগুলো হলো:-
            </h2>
            <ul className="space-y-4 text-green-900">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> সহবাসের সময় প্রায় ২৫ থেকে ৩০ মিনিট বাড়াবে।
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> টেস্টোস্টেরন হরমোন বৃদ্ধি করবে।
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> বীর্য ঘন করবে।
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> প্রস্রাবের কোনো সমস্যা থাকলে দূর করবে।
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> শরীরের দুর্বলতা থাকলে দূর হবে।
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> অতিরিক্ত স্বপ্নদোষ সমস্যার সমাধান করবে।
              </li>
             
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> অতিরিক্ত হস্থমইথুনের জন্য যাদের লি'ঙ্গ ছোট চিকন বা বাঁকা হয়ে গেছে নিয়মিত আমাদের মেডি'সিন সেবনে পে'নিস আগের মত আবার স্বাভাবিক অবস্থায় ফিরে আসবে।
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3">
          <div className="border-2 border-green-600 rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-bold text-green-900 text-center border-b-2 border-green-600 pb-2 mb-4">
              চিকিৎসা সেবায়
            </h2>
            <ul className="space-y-4 text-green-900">
     
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> ডাক্তার সাইদুর রহমান 

              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span> ডি, এইচ, এম, এস (বি এইচ বি) ঢাকা 
               
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✔</span>  গভমেন্ট রেজিস্ট্রেশন নাম্বার - ২৩৪১০
              </li>

            </ul>
          </div>

          <button
            onClick={scrollToOrder} // Add the scrollToOrder functionality here
            className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-red-600 transition"
          >
            অর্ডার করতে ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionBenefits;
