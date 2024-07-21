import React from 'react';
import FacultyCarousel from './FacultyCarousel';

const Faculties = () => {
  return (
    <>
      <main className='w-full h-fit py-6 px-10 max-w-[90%] mx-auto flex flex-col gap-4 items-center'>
        <hr className='w-full'/>
        <h1 className='text-4xl font-bold text-center'>Faculties</h1>
        <FacultyCarousel />
      </main>
    </>
  );
};

export default Faculties;
