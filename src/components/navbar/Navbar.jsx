import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <span className="large_font">Rentalcars</span>
        <span className="small_font">.com</span>
      </div>

      <ul className={toggle ? "mobile_link" : "navbar_items"}>
        <li className="currency">INR</li>
        <li>
          <img
            width={40}
            height={40}
            src="https://e0.pxfuel.com/wallpapers/64/121/desktop-wallpaper-us-flag-usa.jpg"
            alt=""
          />
        </li>
        <li>
          <button>Manage booking</button>
        </li>
      </ul>

      <div className="toggle_button" onClick={() => setToggle(!toggle)}>
        <a href="#">
          <GiHamburgerMenu className="menu_icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
