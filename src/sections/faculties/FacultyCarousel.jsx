import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Modal from "@/sections/faculties/modal";

const FacultyCarousel = (data) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 w-full">
        {data.data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="md:h-[25rem] h-[20rem]">
              <CardHeader className="w-full">
                <img
                  className="w-36 h-36 rounded-[50%] object-cover object-center mx-auto"
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDF8MHx8fDA%3D"
                  alt=""
                />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3 items-center">
                  <p className="text-base md:text-xl">
                    <b>{item.name}</b>
                  </p>
                  <p className="text-justify overflow-ellipsis">
                    {item.description.slice(0, 125)}
                    {item.description.length > 124 && (
                      <span>
                        ...{" "}
                        <Modal
                          name={item.name}
                          desc={item.description}
                          image={
                            "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDF8MHx8fDA%3D"
                          }
                        />
                      </span>
                    )}
                  </p>
                </div>
              </CardContent>
              {/* <CardFooter className='flex justify-center w-full '>
                  <Button size='lg'>Deploy</Button>
                </CardFooter> */}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FacultyCarousel;
