import { Link } from "react-router-dom";
import rollin_rust from "../../assets/rollin_rust.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-[#1e1e1e]">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="w-[20%] flex gap-5 font-medium tracking-[4px] text-xs">
          <a href="">
            <FaInstagram size={24} />
          </a>
          <a href="">
            <FaTwitter size={24} />
          </a>
          <a href="">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="flex-1">
          <div className="w-32 mx-auto">
            <img src={rollin_rust} alt="" />
          </div>
        </div>
        <div className="w-[25%] flex justify-end">
          <ul className="flex items-center gap-5 font-medium uppercase tracking-[3px] text-xs">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link>Get in Touch</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
