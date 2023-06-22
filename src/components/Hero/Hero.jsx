import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center">
      <div className="container mx-auto  px-8 text-white">
        <div className="text-5xl font-light uppercase leading-[58px] mb-8">
          <h5>Professional car repair</h5>
          <h5>And maintenance</h5>
        </div>
        <p className="w-2/4">
          We are focused on providing our clients with the highest level of
          quality and excellent customer support.
        </p>
      </div>
    </section>
  );
};

export default Hero;
