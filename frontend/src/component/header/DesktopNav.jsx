import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, logo }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index} className="font-medium capitalize text-secondary">
            <Link to={menu}>{menu}</Link>
          </li>
        ))}
      </ul>
      {/*login signup*/}
      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="text-secondary px-4 py-2 rounded">Log In</button>
        </li>
        <li>
          <button className="text-secondary px-4 py-2 rounded">Sign Up</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
