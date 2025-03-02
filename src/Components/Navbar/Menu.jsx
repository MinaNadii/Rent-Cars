import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Menu = ({ menuLinks }) => {
  console.log(menuLinks);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-black px-4 py-2 flex items-center  gap-2"
      >
        {isOpen ? <X size={35} /> : <MenuIcon size={35} />}
      </button>
      <ul
        className={`absolute lg:static left-0 top-[100px] bg-white/50 rounded-b-2xl lg:bg-transparent p-4  lg:p-0 w-full lg:w-auto  ${
          isOpen ? "block" : "hidden"
        } lg:flex justify-center gap-7`}
      >
        {menuLinks.map((link) => (
          <li className=" lg:py-0 text-20 max-lg:pl-15">
            <a href={link.path} className="text-gray-500 hover:text-black">
              {link.name}
            </a>
          </li>
        ))}

        <div className="flex gap-2 flex-col p-4 text-20 lg:hidden ">
          <button className="cursor-pointer py-3">Sign In</button>
          <button className="cursor-pointer text-white py-3 bg-mainColor rounded-lg">
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
