import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MdOutlinePayments, MdPeopleOutline } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from "../Security/AuthProvider";
import { Helmet } from "react-helmet-async";
import useSocialLinks from "../../Hook/useSocialLinks";

const AdminDashboard = () => {

  const location = useLocation();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [socialLinks]=useSocialLinks()
  console.log(socialLinks);

  const handleLogOut = () => {
    logOut().then().catch();
    navigate("/");
  };

  const getButtonClass = (path) => {
    return `w-full mb-2 text-start  py-2  px-1 rounded-lg focus:outline-none ${
      location.pathname === path
        ? "bg-yellow-500 text-black"
        : " text-white hover:bg-yellow-600"
    }`;
  };

  return (
    <div className="overflow-y-auto text-start h-screen">
      <Helmet>
        <title>Digital Network| Admin Dashboard</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="w-[150px]">
        <div className="flex items-center justify-center mb-8">
          <Link to={"/"}>
            <img
              className="h-20 w-56 "
              src={socialLinks?.logo2}
              alt="Logo"
            />
          </Link>
        </div>

        <nav>
          <div className="space-y-2 text-start">
            <Link to="/dashboard/admin/adminHome">
              <button className={getButtonClass("/dashboard/admin/adminHome")}>
                <RxDashboard className="text-xl inline-block mr-2" />
                Dashboard
              </button>
            </Link>
            <Link to="/dashboard/admin/allOrders">
              <button className={getButtonClass("/dashboard/admin/allOrders")}>
                <MdOutlinePayments className="text-xl inline-block mr-2" />
                Orders
              </button>
            </Link>
           
           
            
          
          
            <Link to="/dashboard/admin/totalCustomers">
              <button className={getButtonClass("/dashboard/admin/totalCustomers")}>
                <MdPeopleOutline className="text-xl inline-block mr-2" />
                Customers
              </button>
            </Link>

            <Link to="/dashboard/admin/pixelCodes">
              <button className={getButtonClass("/dashboard/admin/pixelCodes")}>
                <MdPeopleOutline className="text-xl inline-block mr-2" />
                Pixel Codes
              </button>
            </Link>
            
            <Link to="/dashboard/admin/settings">
              <button className={getButtonClass("/dashboard/admin/settings")}>
                <AiOutlineSetting className="text-xl inline-block mr-2" />
                Settings
              </button>
            </Link>
            <button
              onClick={handleLogOut}
              className="mr-2 mb-2 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-700 focus:outline-none w-full flex items-center justify-center"
            >
              <IoIosLogOut className="text-xl mr-2" />
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminDashboard;
