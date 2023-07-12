const About = () => {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto flex items-center mt-10">
        <div className="flex-1">
          <div className="w-4/5 mx-auto">
            <h2 className="animate-gradient-text text-8xl uppercase  px-4">
              TODAY IS A GOOD DAY TO TAKE UP THE OPPORTUNITY.
            </h2>
          </div>
        </div>
        <div className="w-1/4 border border-[#0F0FDC] rounded-md mt-4 py-4 px-8">
          <h5 className="text-4xl uppercase mb-6">
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