const About = () => {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-4 gap-y-8">
        <div className="w-full lg:flex-1 text-center lg:text-left">
          <h2 className="animate-gradient-text text-3xl md:text-7xl lg:text-8xl capitalize font-bold py-6  px-4">
            Today is a Good day to take up the opportunity.
          </h2>
        </div>
        <div className="w-full md:w-2/4 lg:w-1/4 border border-[#083aa9] rounded-md mt-4 py-4 px-4 lg:px-8">
          <h5 className="text-2xl lg:text-4xl capitalize font-bold mb-6">
            Let’s build the new normal.
          </h5>
          <p className="text-sm lg:text-base">
            Welcome to Rollin Rust Customs, where the art of automotive
            transformation comes to life!
          </p>
          <p className="text-sm lg:text-base my-4">
            At Rollin Rust Customs, we understand that your vehicle is more than
            just a mode of transportation. It&apos;s an expression of your
            personality, a reflection of your style, and a symbol of your
            passion for the road. That&apos;s why our team of skilled craftsmen
            and automotive aficionados is dedicated to providing top-notch
            customizations that push the boundaries of creativity and
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
