import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="website__name">linkup</div>
      <div className="nav__options">
        <div className="nav__text">Explore</div>
        <div className="nav__text">How It Works</div>
        <div className="nav__text">Login</div>
        <div className="nav__text shade">Join as Brand</div>
        <div className="nav__text shade">Join as Creator</div>
      </div>
    </div>
  );
}

export default Nav;
