import React from "react";
import logo from "../Assets/Default/logo.png";
import "../UI/NavBar.scss";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="SubNavBarContainer">
        <div className="LogoNavBar">
          <img src={logo} alt="logodesign" />
        </div>
        <div className="NavBar-control">
          <div className="Recipes NavBar-links">Recipes</div>
          <div className="login NavBar-links">Login</div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
