import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AllPopularSkills from "../pages/AllPopularSkills"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
    ]
  }
]);

export default router;