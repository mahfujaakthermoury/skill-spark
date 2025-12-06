import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AllPopularSkills from "../pages/AllPopularSkills"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import SkillDetails from "../pages/SkillDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
    path: '/AllPopularSkills',
    element: <AllPopularSkills></AllPopularSkills>
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
    path: '/SkillDetails/:myId',
    element: <PrivateRoute>< SkillDetails></SkillDetails></PrivateRoute>
  },
   {
    path: '/ForgetPass/:email',
    element: <ForgetPass></ForgetPass>
  },
    ]
  }
]);

export default router;