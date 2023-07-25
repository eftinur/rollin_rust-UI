import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
