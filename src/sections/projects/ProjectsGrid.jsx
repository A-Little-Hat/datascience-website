import ProjectCard from "./ProjectCard";
const ProjectsGrid = () => {
  return (
    <>
      <div className="md:grid grid-cols-responsive gap-4 place-items-center hidden">
        {Array.from({ length: 8 }).map((_, index) => {
          return <ProjectCard key={index} />;
        })}
      </div>
    </>
  );
};

export default ProjectsGrid;
