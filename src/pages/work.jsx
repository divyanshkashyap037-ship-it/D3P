import WorkHero from "../components/work/WorkHero";
import WorkList from "../components/work/WorkList";
import LetsTalk from "../components/about/LetsTalk";
import IndexFooter from "../components/home/IndexFooter";

const Work = () => {
  return (
    <main>
      <WorkHero />
      <WorkList />
      <LetsTalk phoneEmail="divyanshkashyap037@gmail.com" />
      <IndexFooter withCta={false} />
    </main>
  );
};

export default Work;
