import React from "react";
import Images from "../images_assets/index.js";
import "../fonts/fonts.css";
import "../index.css"
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav >
        <div className="navbarContent">
          <div className="nav-item">
            <img src={Images.pauralogo} alt="logo" />
          </div>
          <div className="nav-item">
            <input
              type="text"
              placeholder="Search product in Paura Market"
            ></input>
            <img src={Images.search} alt="search"></img>
          </div>
          <div className="nav-item">
            <img src={Images.nepal} />
            <span >Nep</span>
          </div>
          <div className="nav-item">
            <img src={Images.login} />
            <span>Log In</span>
          </div>
          <div className="nav-item">
            <img src={Images.signup} />
            <span>Sign Up</span>
          </div>
          <div className="nav-item">
            <img src={Images.cart} />
            <span> 0 items</span>
          </div>
        </div>
      </nav>

    </>
  );
};
export default Navbar;
