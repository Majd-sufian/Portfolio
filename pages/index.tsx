import { useRef, useEffect } from "react";
// Component
import {
  AboutMe,
  Banner,
  Blogs,
  Contact,
  MotionDiv,
  PortfolioHead,
  Projects,
  Tweets,
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
    if (!refScroll.current) return;

    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    initLocomotiveScroll(lscroll);
    initConsoleLogs();
  }, []);

  return (
    <div id="menu-target" data-scroll-container ref={refScroll}>
      {/* <PortfolioHead />
      <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
        <source src="sound/preloader.mp3" type="audio/mp3" />
      </audio> */}
      {/* <MotionDiv /> */}
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
