import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import AllService from "../pages/AllService";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/About',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/AllService',
        element: <AllService></AllService>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/Profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/ServiceDetails/:myId',
        element: <PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: '/ForgetPass/:email',
        element: <ForgetPass></ForgetPass>
      },
    ]
  }
]);

export default router;