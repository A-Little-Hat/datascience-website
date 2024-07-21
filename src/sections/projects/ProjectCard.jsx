import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const ProjectCard = () => {
  return (
    <>
    <Card className='w-[295px] sm:w-[350px] h-fit p-0 overflow-hidden'>
              <CardContent className='p-0'>
                <div className='flex flex-col gap-3 items-center'>
                  <img
                    className='max-h-[20rem] w-full'
                    src='https://images.unsplash.com/photo-1719937050814-72892488f741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                  />
                  <p className='text-justify px-4 pb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae nostrum distinctio sint nihil officiis ipsa
                    ullam recusandae maiores.
                  </p>
                </div>
              </CardContent>
              <CardFooter className='flex justify-center w-full '>
                <Button size='lg'>Deploy</Button>
              </CardFooter>
            </Card>
    </>
  )
}

export default ProjectCard