import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import MedicineOffer from "./MedicineOffer";
import CommissionBenefits from "./CommissionBenefits";
import SerialConfirm from "./SerialConfirm";
import OrderPage from "./OrderPage";
import BannerFinal from "./BannerFinal";
import OrderText from "./OrderText";
import OrderCard from "./OrderCard";
import OrderFinal from "./OrderFinal";
import {
  FaArrowDown,
  FaArrowUp,
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import useSocialLinks from "../../Hook/useSocialLinks";
import MetaPixel from "../Pixel/MetaPixel";
import OrderFull from "./OrderFull";

const Home = () => {
  const [socialLinks] = useSocialLinks();

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
      orderPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <MetaPixel />
      <Helmet>
        <title>Home | Macapowderbd</title>
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

      {/* Order Full*/}
      <OrderFull scrollToOrder={scrollToOrder}></OrderFull>

      {/* Banner Section */}
      {/* <Banner scrollToOrder={scrollToOrder} /> */}

      {/* Medicine Offer Section */}
      {/* <MedicineOffer scrollToOrder={scrollToOrder} /> */}

      {/* Commission Benefits Section */}
      {/* <CommissionBenefits scrollToOrder={scrollToOrder} /> */}

      {/* Serial Confirm Section */}
      {/* <SerialConfirm scrollToOrder={scrollToOrder} /> */}

      {/* Order Page Section */}
      <div ref={orderPageRef}>
        <OrderPage />
      </div>
    </div>
  );
};

export default Home;
