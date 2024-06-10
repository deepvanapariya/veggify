import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <IoMdMenu className="w-7 h-7" />
      </button>
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button className="absolute right-8 top-32" onClick={onClose}>
          <IoClose className="w-7 h-7" />
        </button>
        <div className="flex flex-col gap-5">
          <ul>
            {menuItems?.map((menu, index) => (
              <li key={index} className="font-medium capitalize text-secondary">
                <Link to={menu}>{menu}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded">
                Log In
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
