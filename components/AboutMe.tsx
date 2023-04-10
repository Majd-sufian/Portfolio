import { useRef } from "react";

// Framer Motion
import { useInView } from "framer-motion";

// Helpers
import { getAnimationStyle } from "../helpers";

const AboutMe: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p ref={ref} style={getAnimationStyle(isInView)} className="about-text">
      Hello stranger! 👋, my name is Majd and I am a software developer, <br />{" "}
      passionate about digital products that help people experience everyday
      life, not endure it.
      <br /> I love building beautiful interfaces, web apps, mobile apps, and
      everything in between!{" "}
    </p>
  );
};

export default AboutMe;
