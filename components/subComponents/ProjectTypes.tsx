import { Dispatch, SetStateAction } from "react";
import { projectTypes, ProjectType } from "../../constants/Projects";

interface ProjectTypesProps {
  currentProjectType: ProjectType;
  setCurrentProjectType: Dispatch<SetStateAction<ProjectType>>;
}

const ProjectTypes: React.FC<ProjectTypesProps> = ({
  currentProjectType,
  setCurrentProjectType,
}) => {
  return (
    <div className="project-buttons">
      <div className="buttons-container">
        {projectTypes.map((projectType: ProjectType) => (
          <button
            className={`project-btn ${
              currentProjectType === projectType ? "active" : ""
            }`}
            onClick={() => setCurrentProjectType(projectType)}
            id={projectType}
          >
            {projectType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypes;
