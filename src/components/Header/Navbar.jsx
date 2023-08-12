import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import rollin_rust from "../../assets/rollin_rust.png";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const { user, logOut } = useContext(AUTH_CONTEXT);

  // Handle Google Firebase user_signout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User is Signed_Out");
      })
      .catch((error) => console.log(error));
  };

  // GSAP Navigation
  // State for Hamburger Button
  const [menuState, setmenuState] = useState({
    initial: false,
    taped: null,
    hamburgerBtn: "open",
    state: false,
  });

  // testing
  const location = useLocation();
  const history = useNavigate();
  useEffect(() => {
    setmenuState({ taped: false, hamburgerBtn: "close" });
  }, [location, history]);

  // State for Disabled Button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (menuState.initial === false) {
      setmenuState({
        initial: null,
        taped: true,
        hamburgerBtn: "close",
        state: true,
      });
    } else if (menuState.taped === true) {
      setmenuState({
        taped: !menuState.taped,
        hamburgerBtn: "open",
        state: false,
      });
    } else if (menuState.taped === false) {
      setmenuState({
        taped: !menuState.taped,
        hamburgerBtn: "close",
        state: true,
      });
    }
  };

  // Enable and Disable the Hamburger Button
  const disableMenu = () => {
    setDisabled(!disabled);

    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="site_header bg-white">
      {/* GSAP */}
      <div className="container mx-auto px-2">
        <div className="header_wrapper">
          <div className="inner_header">
            <div className="logo_wrapper w-20 lg:w-32 py-2">
              <Link to="/">
                <img className="w-full" src={rollin_rust} alt="" />
              </Link>
            </div>
            <div className="flex items-center">
              <>
                <ul className="hidden lg:flex items-center gap-8">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  {/* Conditionally rendering Navigation Menu depending on user_sign-in */}
                  {user ? (
                    <>
                      <li>
                        <Link to="/bookings">My Bookings</Link>
                      </li>
                      <li>
                        <button onClick={handleLogOut} className="form_btn">
                          Sign-out
                        </button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/register">
                        <button className="form_btn">Register</button>
                      </Link>
                    </li>
                  )}
                </ul>
              </>
              <div className="menu_toggle block lg:hidden">
                <button
                  disabled={disabled}
                  className={`menu_trigger ${
                    menuState.state ? "menu_close" : ""
                  }`}
                  onClick={handleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HamburgerMenu menuState={menuState} />
    </header>
  );
};

export default Navbar;
