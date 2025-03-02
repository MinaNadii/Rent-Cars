import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <main>
      <header className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default MasterLayout;
