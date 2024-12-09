import React from "react";
import { Link } from "react-router";
import logo from "../assets/shared/desktop/logo.svg";
import Button from "../UI/Button";
import Card from "../UI/Card";
const Header = () => {
  return (
    <header className="py-8 px-4">
      <Card classes="flex gap-16 items-center">
        <Link to="/">
          <img src={logo} alt="payapi logo" />
        </Link>

        {/* <nav className="flex gap-8 items-center justify-between w-full">
          <ul className="flex gap-8 font-bold text-gray-600 transition-all duration-300">
            <li>
              <Link to="/pricing" className="hover:text-dark_pink">Pricing</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-dark_pink">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-dark_pink">Contact</Link>
            </li>
          </ul>

          <Button btnText="Schedule a Demo" />
        </nav> */}
      </Card>
    </header>
  );
};

export default Header;
