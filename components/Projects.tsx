import { useRef, useState } from "react";

// Sub Components
import { ProjectCard } from "./subComponents";

// Framer Motion
import { useInView } from "framer-motion";
// Types
import { Project } from "../types/global";

// Helpers
import { getAnimationStyle } from "../helpers";

// Constants
import { projects, ProjectType } from "../constants/Projects";
import ProjectTypes from "./subComponents/ProjectTypes";

const Projects: React.FC<{}> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [currentProjectType, setCurrentProjectType] =
    useState<ProjectType>("Clients");

  return (
    <section id="sectionProjects" className="section-projects">
      <section ref={ref} style={getAnimationStyle(isInView)}>
        <h1 className="heading-1">
          <span>Yeah, I work hard </span> <small>💼</small>
        </h1>
        <p className="paragraph">
          Each project is unique. Here are some of my works.{" "}
        </p>
      </section>

      <ProjectTypes
        currentProjectType={currentProjectType}
        setCurrentProjectType={setCurrentProjectType}
      />

      {projects.map((project: Project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </section>
  );
};

export default Projects;
