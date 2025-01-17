import { Button } from "@/components/ui/button";
import ProjectsGrid from "./ProjectsGrid";
import MobileCarousel from "./MobileCarousel";

const Projects = () => {
  return (
    <>
      <main className="w-full h-fit py-6 px-10 max-w-[90%] mx-auto flex flex-col gap-4 items-center">
        <hr className="w-full" />
        <h1 className="font-bold text-center text-4xl">Projects</h1>
        <div className="flex items-center w-full gap-2 mt-4">
          <Button size="lg" variant="outline" className="flex-1">
            <p className="text-xl font-semibold">NLP</p>
          </Button>
          <Button size="lg" variant="outline" className="flex-1">
            <p className="text-xl font-semibold">Vision</p>
          </Button>
        </div>
        <section className="w-full flex flex-col gap-4">
          <ProjectsGrid />
          <MobileCarousel />
          <div className="w-full text-center">
            <Button
              size="lg"
              className="bg-transparent text-blue-500 text-lg hover:bg-transparent hover:underline"
            >
              Load More
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
