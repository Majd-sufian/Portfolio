import { projects } from "../contants";
import { Project } from "../types/global";
import ProjectCard from "./subComponents/ProjectCard";

const Projects: React.FC<{}> = ({}) => {
  return (
    <section id="sectionProjects" className="section-projects">
      <h1 className="heading-1">
        <span>Yeah, I work hard </span> <small>💼</small>
      </h1>
      <p className="paragraph">
        Each project is unique. Here are some of my works.{" "}
      </p>

      {projects.map((project: Project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </section>
  );
};

export default Projects;
