import { lazy } from "react";

const PortfolioHead = lazy(() => import("./PortfolioHead"));
const MotionDiv = lazy(() => import("./MotionDiv"));
const Banner = lazy(() => import("./Banner"));
const AboutMe = lazy(() => import("./AboutMe"));
const Projects = lazy(() => import("./Projects"));
const Blogs = lazy(() => import("./Blogs"));
const Contact = lazy(() => import("./Contact"));
const Navigation = lazy(() => import("./Navigation/Navigation"));
const Skills = lazy(() => import("./Skills"));
const Tweets = lazy(() => import("./Tweets"));

export {
  PortfolioHead,
  MotionDiv,
  Banner,
  AboutMe,
  Projects,
  Blogs,
  Contact,
  Navigation,
  Skills,
  Tweets,
};
