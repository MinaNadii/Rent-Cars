import { Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const NavLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Become a rintal",
      path: "/",
    },
    {
      name: "Rinatal deals",
      path: "/",
    },
    {
      name: "How it work",
      path: "/",
    },
    {
      name: "Why choose us",
      path: "/",
    },
  ];

  return (
    <div className=" lg:w-full px-4 py-11 mx-auto">
      <nav className="flex items-center justify-between lg:justify-around">
        <Link to="/">
          <Logo />
        </Link>
        <Menu menuLinks={NavLinks} />
        <div className="flex gap-2 max-lg:hidden p-4 text-20 ">
          <button className="cursor-pointer px-2">Sign In</button>
          <button className="cursor-pointer text-white py-3 px-4 bg-mainColor rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
