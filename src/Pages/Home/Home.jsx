import React, { useRef } from 'react';
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

const Home = () => {
  const orderPageRef = useRef(null);

  // Function to scroll to OrderPage
  const scrollToOrder = () => {
    if (orderPageRef.current) {
      orderPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
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

      {/* Call Button for All Devices */}
      <a 
        href="tel:01709-049759"  // Replace with your phone number
        className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        style={{ zIndex: 1000 }} // Ensure the button appears above other content
      >
        Call Us
      </a>
    </div>
  );
};

export default Home;
