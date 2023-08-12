import { Link } from "react-router-dom";
import heroImage from "../../assets/photos/Hero_image.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_wrapper relative flex justify-center items-center h-screen">
      {/* black fade overlay for the visibility of texts */}
      <div className="fade"></div>  
      {/* Main Hero content */}
      <div className="container mx-auto px-8 flex justify-center items-center ">
        {/* Hero Content */}
        <div className="hero_content relative w-full lg:w-2/4 text-center tracking-widest px-4">
          <p className="text-xs lg:text-lg text-white capitalize mb-8">
            Go green, go auto!
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white capitalize font-bold mb-8">
            Let our skilled technicians repair it right
          </h2>
          <div className="tall_line"></div>
          <Link to="/services">
            <button className="cssbuttons-io-button mx-auto mt-6">
              Get Started
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/* Hero Image */}
      <div className="hero_image w-full h-full absolute top-0 left-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
