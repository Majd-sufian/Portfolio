import { useRef, useEffect } from "react";
// Component
import {
  PortfolioHead,
  Banner,
  Audio,
  AboutMe,
  Projects,
  Blogs,
  Tweets,
  Contact,
} from "../components";

// Helpers
import {
  initConsoleLogs,
  initLocomotiveScroll,
  locomotiveScroll,
} from "../helpers";

let lscroll: any;

const index: React.FC<{}> = ({}) => {
  const refScroll = useRef(null);

  useEffect(() => {
    if (!refScroll.current) return undefined;

    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    initLocomotiveScroll(lscroll);
    initConsoleLogs();

    return () => {
      lscroll?.destroy();
      lscroll = null;
    };
  }, []);

  return (
    <div id="menu-target" data-scroll-container ref={refScroll}>
      <PortfolioHead />
      <Audio />
      <Banner />
      <main className="container">
        <AboutMe />
        <Projects />
        <Blogs />
        <Tweets />
        <Contact />
      </main>
    </div>
  );
};

export default index;
