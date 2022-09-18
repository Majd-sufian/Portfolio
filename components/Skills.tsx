import AnimatedTags from "./subComponents/AnimatedTags";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Skills: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sectionSkills" className="section-skills">
      <h1
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        My Favorite Weapons 👨‍💻
      </h1>
      <AnimatedTags />
    </section>
  );
};

export default Skills;
