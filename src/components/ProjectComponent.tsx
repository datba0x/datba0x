import { Link } from "react-router-dom";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  deploymentUrl?: string;
  techstack?: string;
}

export interface ProjectProps {
  project: Project;
}

const ProjectComponent = ({ project }: ProjectProps) => {
  return (
    <div className="col-span-1 border border-gray-500">
      <div>
        <img src={project.imageUrl} alt={project.description} />
      </div>
      <div className="p-3 border-y border-gray-500">
        <h2 className="text-lg font-medium text-gray-500">
          {project.techstack}
        </h2>
      </div>
      <div className="p-4 gap-4">
        <h1 className="text-xl font-medium text-white">{project.title}</h1>
        <h2 className="text-lg font-medium text-gray-500">
          {project.description}
        </h2>
        <div className="flex flex-row pt-3 ">
          {project.githubUrl ? (
            <div className="pr-4">
              <Link to={project.githubUrl}>
                <button className="border border-[#C778DD] py-2 px-4 hover transition-transform duration-300 hover:scale-105">
                  {"Source <~>"}
                </button>
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          {project.deploymentUrl ? (
            <Link to={project.deploymentUrl}>
              <button className="border border-white py-2 px-4 hover transition-transform duration-300 hover:scale-105">
                {"Demo |>"}
              </button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
