import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const HamburgerMenu = ({ menuState }) => {
  const { user, logOut } = useContext(AUTH_CONTEXT);

  // Handle Google Firebase user_signout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User is Signed_Out");
      })
      .catch((error) => console.log(error));
  };

  // For GSAP
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (menuState.taped === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        // y: "-100%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      menuState.taped === true ||
      (menuState.taped === true && menuState.initial === null)
    ) {
      gsap.to(menu, { duration: 0, css: { display: "block" } });

      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0.8,
        height: "100%",
        // y: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      fadeInUp(info);
      staggerLinks(line1, line2, line3, line4);
    }
  }, [menuState]);

  const staggerLinks = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      y: 100,
      duration: 0.8,
      delay: 0.1,
      opacity: 0,
      ease: "power3.inOut",
      stagger: { amount: 0.1 },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger_menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="reveal_menu-bg"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu_main">
        <div className="container mx-auto">
          <div className="menu_wrapper">
            <div className="menu_tags px-4">
              <nav className="w-3/4">
                <ul>
                  {/* Navigating with React Router */}
                  <li
                    ref={(el) => (line1 = el)}
                    className="w-full lg:w-[700px] h-[80px] lg:h-[90px] text-4xl lg:text-6xl font-light"
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    ref={(el) => (line2 = el)}
                    className="w-full lg:w--[700px] h-[80px] lg:h-[90px] text-4xl lg:text-6xl font-light"
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  <li
                    ref={(el) => (line3 = el)}
                    className="w-full lg:w--[700px] h-[80px] lg:h-[90px] text-4xl lg:text-6xl font-light"
                  >
                    <Link to="/bookings">My Bookings</Link>
                  </li>
                  {user ? (
                    <li
                      ref={(el) => (line4 = el)}
                      className="w-full lg:w--[700px] h-[80px] lg:h-[90px] text-4xl lg:text-6xl font-light"
                    >
                      <button onClick={handleLogOut} className="form_btn">
                        Sign-out
                      </button>
                    </li>
                  ) : (
                    <li
                      ref={(el) => (line4 = el)}
                      className="w-full lg:w--[700px] h-[80px] lg:h-[90px] text-4xl lg:text-6xl font-light"
                    >
                      <Link to="/register">Register</Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div
                ref={(el) => (info = el)}
                className="info w-full lg:w-[320px] mt-12"
              >
                <span className="text-2xl block mb-4">Get in touch:</span>
                <div className="w-fit flex gap-8 text-xs">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
