import "./Hero.css";

const Hero = () => {
  return (
    <section className="relative flex justify-start items-center py-64">
      <div className="container mx-auto px-8 text-white">
        <div className="hero_content relative w-full lg:w-2/4 tracking-widest px-4">
          <h2 className="text-5xl lg:text-7xl text-white capitalize">
            Our motto is "fix it right the first time."
          </h2>
          <p className="text-sm lg:text-lg mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ex
            laborum deserunt odio et laboriosam eveniet?
          </p>
          <button className="cssbuttons-io-button  mt-6">
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
        </div>
      </div>
      <div className="hero_image w-full h-full absolute top-0 left-0">
        <img
          src="https://images.pexels.com/photos/4489704/pexels-photo-4489704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
