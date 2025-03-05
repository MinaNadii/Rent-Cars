import MasterLayout from "./Components/Layout/MasterLayout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CarDetails from "./Pages/Cars/CarDetails";
import Cars from "./Pages/Cars/Cars";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cars",
          element: <Cars />,
        },
        {
          path: "cars/:id",
          element: <CarDetails />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <SpeedInsights />
    </>
  );
};

export default App;
