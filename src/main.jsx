
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Pages/Security/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Pages/Security/AuthProvider";
import Register from "./Pages/Security/Register";
import DashboardRoot from "./Pages/Dashboard/DashboardRoot";
import AdminHome from "./Pages/Dashboard/AdminHome";
import TodayOrders from "./Pages/Dashboard/Routes/TodayOrders";
import TotalCustomers from "./Pages/Dashboard/Routes/TotalCustomers";
import AllOrders from "./Pages/Dashboard/Routes/AllOrders";
import OrderDetailsFinal from "./Pages/Dashboard/Routes/OrderDetailsFinal";
import AddLinks from "./Pages/Dashboard/AddLinks";
import Settings from "./Pages/Dashboard/Settings";
import OrderSuccess from "./Pages/Home/OrderSuccess";
import OrderDetails from "./Pages/Dashboard/Routes/OrderDetails copy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/admin/login-php",
        element: <Login></Login>,
      },
      {
        path:'/order-success',
        element: <OrderSuccess></OrderSuccess>
      },
      {
        path:'/order-details/:orderId',
        element: <OrderDetails></OrderDetails>
      },
      {
        path: "/admin-login/reg-php",
        element: <Register></Register>,
      },
      {
        path:'dashboard',
        element:<DashboardRoot></DashboardRoot>,
        children:[
          {
            path:'/dashboard/admin/adminHome',
            element:<AdminHome></AdminHome>
          },
          {
            path:'/dashboard/admin/todayOrders',
            element:<TodayOrders></TodayOrders>
          },
          {
            path:'/dashboard/admin/totalCustomers',
            element:<TotalCustomers></TotalCustomers>
          },
          {
            path:'/dashboard/admin/allOrders',
            element:<AllOrders></AllOrders>
          },
          
          {
            path:'/dashboard/admin/orders/:status',
            element:<OrderDetailsFinal></OrderDetailsFinal>
          },
         
          {
            path: "/dashboard/admin/addLinks",
            element: <AddLinks />,
          },
          {
            path: "/dashboard/admin/settings",
            element: <Settings />,
          },

        ]
      }
    ]
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
         <AuthProvider>
               <RouterProvider router={router} />
          </AuthProvider>
    </HelmetProvider> 
    </QueryClientProvider>
  </React.StrictMode>
);