import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <b>Katalog</b>
        </Link>
        <Link to="/cart">
          <ShoppingBag size={32} />
        </Link>
      </div>
    </div>
  );
};
