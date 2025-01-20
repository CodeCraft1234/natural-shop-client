import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";

import ScrollTop from "./ScrollTop";
import { useContext } from "react";


import Footer from "./Components/Footer/Footer";
import { AuthContext } from "./Pages/Security/AuthProvider";
import TheAdmin from "./Pages/TheAdmin";

const Root = () => {
  const location = useLocation();
  const noheaderfooter =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("signup");
    location.pathname.includes("search");
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white">
      <ScrollTop />
      {noheaderfooter || <TheAdmin />}
      <div className="min-h-screen overflow-y-hidden max-w-auto mx-auto">
        <Outlet />
      </div>
      {noheaderfooter || <Footer />}
    </div>
  );
};

export default Root;
