import { useState } from "react";
import Search from "./Search";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openModal() {
    setCartIsOpen(true);
  }

  return (
    <div className="navigation">
      <div className="navbar">
        <h3 className="logo">🏪 One Stop Shop</h3>
        <div className="link__container">
          <ul className="links">
            <Link to="/">
              <li>Products</li>
            </Link>
            <Link to="/sale">
              <li>Sale</li>
            </Link>
            <Link to="/faqs">
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
        <div className="navbar__login">
          <Search className="navbar__search" />
          <a>Cart</a>
          <a>Account</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
