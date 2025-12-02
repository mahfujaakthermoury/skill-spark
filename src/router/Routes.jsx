import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import AllPopularSkills from "../pages/AllPopularSkills"

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
  }
    ]
  }
]);

export default router;