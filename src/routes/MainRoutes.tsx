import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import HomeLayout from "../components/Layout/HomeLayout";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);
