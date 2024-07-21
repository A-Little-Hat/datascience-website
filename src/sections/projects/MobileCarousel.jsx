import React from 'react'
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
import ProjectCard from './ProjectCard';
const MobileCarousel = () => {
  return (
    <>
    <Carousel className='w-full md:hidden'>
      <CarouselContent className='-ml-1 w-full'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='pl-1 md:basis-1/2 lg:basis-1/4'>
            <div className='p-1 grid place-items-center'>
              <ProjectCard/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}

export default MobileCarousel