import { Project } from "../../types/global";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    tectStack,
    media,
    dataScrollClass,
    firstName,
    secondName,
    social,
    description,
  }: Project = project;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="project-card"
    >
      <div
        className="project-card__left"
        data-displacement="webp/myDistorsionImage.webp"
      >
        <img src={media.firstImage.img} alt={media.firstImage.alt} />
        <img src={media.secondImage.img} alt={media.secondImage.alt} />
      </div>
      <div className="project-card__right">
        <h2
          data-scroll
          data-scroll-offset="35%"
          data-scroll-repeat={true}
          data-scroll-class={dataScrollClass}
          className="heading-2"
        >
          {firstName}
          <br /> {secondName}
        </h2>
        <div className="description">{description}</div>
        <span className="animated-text tools">{tectStack}</span>
        <a
          rel="noopener"
          target="_blank"
          href={social.link}
          className="project-card__link"
        >
          VISIT THE WEBSITE
        </a>
        <div className="project-card__socials">
          <a rel="noopener" target="_blank" href={social.github}>
            <img src="svg/github.svg" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
