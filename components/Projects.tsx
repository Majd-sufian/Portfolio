import { projects } from "../contants";
import { Project } from "../types/global";
import ProjectCard from "./subComponents/ProjectCard";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Projects: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sectionProjects" className="section-projects">
      <section
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="heading-1">
          <span>Yeah, I work hard </span> <small>💼</small>
        </h1>
        <p className="paragraph">
          Each project is unique. Here are some of my works.{" "}
        </p>
      </section>

      {projects.map((project: Project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </section>
  );
};

export default Projects;
