import React from 'react';
import About from './About';
import Events from './Events';

const AboutAndEvents = () => {
  return (
    <>
      <main className='w-full h-fit px-8 py-6 sm:p-10 sm:max-w-[90%] mx-auto flex flex-col gap-4 items-center'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center'>Welcome to Data Science Lab</h1>
        <div className='w-full flex flex-col md:flex-row items-start gap-12'>
          <About />
          <Events />
        </div>
      </main>
    </>
  );
};

export default AboutAndEvents;
