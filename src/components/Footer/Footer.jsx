import React from "react";
import rollin_rust from "../../assets/rollin_rust.png";

const Footer = () => {
  return (
    <footer className="container mx-auto grid grid-cols-4 gap-5 px-8 py-4 text-white">
      <div className="w-28">
        <img src={rollin_rust} alt="" />
      </div>
      <div className="col-span-2">
        <>
          <ul className="flex gap-5 mb-2">
            <li>About</li>
            <li>Career</li>
            <li>Help</li>
            <li>Support</li>
          </ul>
        </>
        <>
          <p className="text-sm text-white font-medium">
            &copy; 2023 Rollin Rust
          </p>
        </>
      </div>
      <div>
        <div className="flex gap-5 mb-2">
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
        </div>
        <>
          <p className="text-sm text-white font-medium">
            Helpline: +228 735373
          </p>
        </>
      </div>
    </footer>
  );
};

export default Footer;
