import { Carousel } from "flowbite-react";

const MainCarousel = () => {
  return (
    <>
      <div className="h-[12rem] md:h-[30rem]">
        <Carousel className="rounded-none">
          <img
            className="h-full rounded-none"
            src="https://www.caluniv.ac.in/images/slider/slider-00.jpg"
            alt="..."
          />
          <img
            className="h-full rounded-none"
            src="https://www.caluniv.ac.in/images/slider/slider-01.jpg"
            alt="..."
          />
          <img
            className="h-full rounded-none"
            src="https://www.caluniv.ac.in/images/slider/slider-02.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
