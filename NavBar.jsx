import React from "react";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>furni.shop</p>
      </div>
      <div className="nav-components">
        <p>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Contact</p>
      </div>
      <div className="nav-icons">
        <BsSearch size={"20px"} />
        <CgMenuLeft size={"20px"} />
      </div>
    </div>
  );
};

export default NavBar;
