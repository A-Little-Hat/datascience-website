import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const FacultyCarousel = (data) => {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='-ml-1 w-full'>
        {data.data.map((item, index) => (
          <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/4'>
            <div className='p-1 grid place-items-center -ml-3 sm:-ml-0'>
              <Card className='w-[300px] sm:w-[350px] h-fit pt-5 border-none shadow-none'>
                <CardContent>
                  <div className='flex flex-col gap-3 items-center'>
                    <img className='w-36 h-36 rounded-[50%] object-cover object-center' src='https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDF8MHx8fDA%3D' alt='' />
                    <p><b>{item.name}</b></p>
                    <p className='text-justify'>{item.description}</p>
                  </div>
                </CardContent>
                {/* <CardFooter className='flex justify-center w-full '>
                  <Button size='lg'>Deploy</Button>
                </CardFooter> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FacultyCarousel;
