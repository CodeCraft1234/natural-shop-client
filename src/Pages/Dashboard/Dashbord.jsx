import AdminDashboard from "./AdminDashboard";






const Dashboard = ({ showSidebar }) => {


  return (
        <div
          className={` bg-[#1b1b1b] w-44 min-h-screen lg:fixed text-white  ${
            showSidebar ? "block" : "hidden"
          } md:block`}
        >
          <ul className="menu  text-center text-base">
               <AdminDashboard></AdminDashboard> 
          </ul>
        </div>
  );
};

export default Dashboard;
