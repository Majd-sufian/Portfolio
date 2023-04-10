import { useRef } from "react";

// Framer Motion
import { useInView } from "framer-motion";
// Types
import { Project } from "../types/global";

// Sub Components
import ProjectCard from "./subComponents/ProjectCard";

// Constants
import { projects, transition } from "../contants/Projects";

const Projects: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const projectsSectionStyle = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition,
  };

  return (
    <section id="sectionProjects" className="section-projects">
      <section ref={ref} style={projectsSectionStyle}>
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
