import React from "react";
import { Link } from "react-router-dom";
import rollin_rust from "../../assets/rollin_rust.png";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center px-8 py-4 text-white">
      <div className="flex gap-5">
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Youtube</a>
      </div>
      <div className="w-36">
        <img src={rollin_rust} alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>services</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
