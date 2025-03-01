import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MasterLayout;
