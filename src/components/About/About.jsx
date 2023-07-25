const About = () => {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-4 gap-y-8 mt-10">
        <div className="flex-1">
          <h2 className="animate-gradient-text text-5xl md:text-7xl lg:text-8xl capitalize  px-4">
            Today is a Good day to take up the opportunity.
          </h2>
        </div>
        <div className="w-full md:w-2/4 lg:w-1/4 border border-[#0F0FDC] rounded-md mt-4 py-4 px-4 lg:px-8">
          <h5 className="text-4xl capitalize mb-6">
            Let’s build the new normal.
          </h5>
          <p className="font-medium">
            Welcome to Rollin Rust Customs, where the art of automotive
            transformation comes to life!
          </p>
          <p className="font-medium my-4">
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
