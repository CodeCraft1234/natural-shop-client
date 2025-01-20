import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import MedicineOffer from './MedicineOffer';
import CommissionBenefits from './CommissionBenefits';
import SerialConfirm from './SerialConfirm';
import OrderPage from './OrderPage';

import BannerFinal from './BannerFinal';
import OrderText from './OrderText';
import OrderCard from './OrderCard';
import OrderFinal from './OrderFinal';

import { FaArrowDown, FaArrowUp, FaFacebook, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import useSocialLinks from '../../Hook/useSocialLinks';
import MetaPixel from '../Pixel/MetaPixel';


const Home = () => {

  const [socialLinks]=useSocialLinks()

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
        setScrollDirection("up");
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (direction) => {
    const target = direction === "up" ? 0 : document.body.scrollHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const orderPageRef = useRef(null);

  // Function to scroll to OrderPage
  const scrollToOrder = () => {
    if (orderPageRef.current) {
      orderPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <MetaPixel />
      <Helmet>
        <title>Home | Astha Homeo Hall</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {/* Banner Final Section */}
      <BannerFinal scrollToOrder={scrollToOrder}></BannerFinal>

      {/* Order Text */}
      <OrderText scrollToOrder={scrollToOrder}></OrderText>

      {/* Order Card */}
      <OrderCard scrollToOrder={scrollToOrder}></OrderCard>

      {/* Order Final*/}
      <OrderFinal scrollToOrder={scrollToOrder}></OrderFinal>

      {/* Banner Section */}
      <Banner scrollToOrder={scrollToOrder} />

      {/* Medicine Offer Section */}
      <MedicineOffer scrollToOrder={scrollToOrder} />

      {/* Commission Benefits Section */}
      <CommissionBenefits scrollToOrder={scrollToOrder} />

      {/* Serial Confirm Section */}
      <SerialConfirm scrollToOrder={scrollToOrder} />

      {/* Order Page Section */}
      <div ref={orderPageRef}>
        <OrderPage />
      </div>






      <div className=" flex flex-col  items-center space-y-4 ">
      <div>
          <a
          href={`https://wa.me/+88${socialLinks?.whatsapp}`} // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[400px] right-8 z-50 bg-green-500 p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>

             {/* Messenger Button */}
             <a
          href={`https://m.me/${socialLinks?.facebook}`} // Replace with your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[340px] right-8 z-50 bg-blue-600 p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on Messenger"
        >
          <FaFacebook className="text-white text-xl" />
        </a>

             {/* Messenger Button */}
             <a
          href={`https://m.me/${socialLinks?.facebook}`} // Replace with your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[280px] right-8 z-50 bg-[#0078FF] p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on Messenger"
        >
          <FaFacebookMessenger className="text-white text-xl" />
        </a>
      </div>

        {/* Scroll Button */}
        {showScrollButton && (
          <button
            onClick={() => scrollTo(scrollDirection)}
            className="fixed bottom-32 right-8 z-50 bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            title={`Scroll to ${scrollDirection === "up" ? "Top" : "Bottom"}`}
          >
            {scrollDirection === "up" ? (
              <FaArrowUp className="text-white text-xl" />
            ) : (
              <FaArrowDown className="text-white text-xl" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
