import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../src/App.css";

const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav navbar fixed-top w-100 bg-info ">
        <li>
         <Link to={'/'}>
         <i className="bi bi-shop-window logo"></i>
          <span className="navbar-brand">Foodie</span>
         </Link>

        </li>
        <li className="nav-item">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/card"}>Recipes</NavLink>
        </li>
        <li className="nav-item">
          <input type="text" placeholder="search" className="form-control" />
        </li>
        {/* <li className="nav-item">
          <button className="btn btn-outline-primary login-btn">Login</button>
        </li> */}
        {/* <li>
         <NavLink to={'/'}>
         <i className="bi bi-house me-2 d-lg-none d-sm-block menu-icon"  ></i>
         </NavLink>
        </li> */}
      </ul>
     
    </div>
  );
};

export default Navbar;
