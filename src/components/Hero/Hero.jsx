import "./Hero.css";

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center">
      <div className="container mx-auto px-8 text-white">
        <div className="relative w-3/4 z-50 ">
          <h5 className="text-8xl uppercase leading-[6rem]">
            Professional car repair And maintenance
          </h5>
          <p className="text-lg font-medium mt-10">
            We are focused on providing our clients with the highest level of
            quality and excellent customer support.
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <img
          src="https://images.unsplash.com/photo-1551522435-b2347f669045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="fade z-40"></div>
    </section>
  );
};

export default Hero;
