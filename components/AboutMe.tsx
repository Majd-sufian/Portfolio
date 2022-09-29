import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutMe: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="about-text"
    >
      Hello stranger! 👋, my name is Majd and I am a software developer, <br />{" "}
      passionate about digital products that help people experience everyday
      life, not endure it.
      <br /> I love building beautiful interfaces, web apps, mobile apps, and
      everything in between!{" "}
      <span className={`rocket ${isInView && "animateRocket"}`}>🚀</span>
    </p>
  );
};

export default AboutMe;
