import AboutHero from "../components/about/AboutHero";
import AboutSkills from "../components/about/AboutSkills";
import AboutEducation from "../components/about/AboutEducation";
import OrangeContent from "../components/about/OrangeContent";
import LetsTalk from "../components/about/LetsTalk";
import IndexFooter from "../components/home/IndexFooter";

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutSkills />
      <AboutEducation />
      <OrangeContent />
      <LetsTalk />
      <IndexFooter withCta={false} />
    </main>
  );
};

export default About;
