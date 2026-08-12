import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Showreel from "../components/home/Showreel";
import Featured from "../components/home/Featured";
import WhatIDo from "../components/home/WhatIDo";
import IndexFooter from "../components/home/IndexFooter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Showreel />
      <Featured />
      <WhatIDo />
      <IndexFooter />
    </div>
  );
};

export default Home;
