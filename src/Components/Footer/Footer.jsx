import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black px-6 md:px-16 py-8">
      {/* Main Container */}
      <div className="container mx-auto">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mb-8">
          
          {/* About Us Section */}
          <div className="flex  items-center lg:items-start">
            <div className="text-white ">
              <img className="h-16   w-72" src="https://i.ibb.co/PNMKyJz/Whats-App-Image-2024-09-06-at-01-04-31-c6d5471a.jpg" alt="Logo" />
            </div>
          </div>
          
          {/* Get to Know Us and Important Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Get to Know Us Section */}
            <div className="flex flex-col items-start lg:items-start">
              <h3 className="text-lg font-bold mb-4">Get to know us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:underline">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Contact Us</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Return Policy</a></li>
              </ul>
            </div>

            {/* Important Links Section */}
            <div className="flex flex-col items-start lg:items-start">
              <h3 className="text-lg font-bold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:underline">All Products</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">All Categories</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">New Products</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Track Order</a></li>
                <li><a href="#" className="text-gray-700 hover:underline">Checkout</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Support Number */}
        <div className="text-center font-semibold mb-8">
          <p>Support Number</p>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-300 pt-4">
          <p className="text-gray-600 text-sm">
            &copy; 2022 - 2024 All rights reserved by <a href="#" className="text-green-700 font-bold hover:underline">Astha Homeo Hall</a>.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <p className="text-sm">Follow us on</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
