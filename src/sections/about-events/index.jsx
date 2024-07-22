import About from "./About";
import Events from "./Events";

const AboutAndEvents = () => {
  return (
    <>
      <main className="w-full px-8 py-6 sm:p-10 sm:max-w-[90%] mx-auto flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Data Science Lab
        </h1>
        <div className="w-full flex flex-col md:flex-row items-start gap-12 mt-8">
          <div className="w-[55%] max-md:w-full">
            <About />
          </div>
          <div className="w-[35%] max-md:w-full">
            <Events />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutAndEvents;
