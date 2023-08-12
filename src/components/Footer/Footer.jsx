import rollin_rust from "../../assets/rollin_rust.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1e1e1e] border-t">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 px-4 py-4">
        <div className="w-20 lg:w-28 mx-auto lg:mx-0">
          <img src={rollin_rust} alt="" />
        </div>
        <div className="w-fit flex flex-col mx-auto lg:mx-0 text-center lg:text-left">
          <ul className="flex gap-5 mb-3">
            <li>About</li>
            <li>Career</li>
            <li>Help</li>
            <li>Support</li>
          </ul>
          <p className="text-sm text-[#1e1e1e] font-medium">
            &copy; 2023 Rollin Rust
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
