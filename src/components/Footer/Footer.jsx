import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import rollin_rust from "../../assets/pookatales.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1e1e1e]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 items-center gap-5 px-8 py-4">
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
            <p className="text-sm text-[#1e1e1e] font-medium">
              &copy; 2023 Rollin Rust
            </p>
          </>
        </div>
        <div>
          <small>Follow us on:</small>
          <div className="w-fit flex gap-8 text-xs my-2">
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
          <>
            <p className="text-sm text-[#1e1e1e] font-medium">
              Helpline: +228 735373
            </p>
          </>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
