import React from 'react';

const NavMenus = () => {
  return (
    <>
      <ul className='flex flex-col md:flex-row p-2 items-start gap-4 w-full'>
        <li className={`whitespace-nowrap flex items-center rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground px-4 py-3 w-full ${true && 'text-accent-foreground bg-accent'} ${(true) && 'mt-auto'}`}>
          <a href='#' className={`inline-flex gap-3 text-sm sm:text-[1rem] items-center justify-start`}>Data Science</a>
        </li>
        <li className={`whitespace-nowrap flex items-center rounded-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground px-4 py-3 w-full ${true && 'text-accent-foreground bg-accent'} ${(true) && 'mt-auto'}`}>
          <a href='#' className={`inline-flex gap-3 text-sm sm:text-[1rem] items-center justify-start`}>IOT</a>
        </li>
      </ul>
    </>
  );
};

export default NavMenus;
