import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FaBarsProgress } from 'react-icons/fa6';
import NavMenus from './NavMenus';
const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <FaBarsProgress />
        </SheetTrigger>
        <SheetContent className='flex flex-col items-baseline'>
          <SheetTitle className='logo px-4 py-2'>
            <a href={'/'} className='flex gap-2 items-center justify-start'>
              <img
                className='w-8 h-8'
                src='https://www.caluniv-ucsta.net/images/logo.png'
                alt='Calcutta University Logo'
              />
              <h2 className='font-bold text-[1.2rem]'>University of Calcutta</h2>
            </a>
          </SheetTitle>
          <NavMenus/>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
