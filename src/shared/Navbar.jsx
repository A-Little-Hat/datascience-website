import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='px-12 h-[8vh] flex justify-between items-center bg-blue-800 text-white'>
    <div className='flex p-2 items-center justify-between w-96'>
        <img className='w-12 h-12' src="https://www.caluniv-ucsta.net/images/logo.png" alt="Calcutta University Logo" />
        <h3 className='text-3xl font-bold'>University of Calcutta</h3>
    </div>
    <ul className='flex p-2 items-start gap-4'>
        <li className='text-xl'><a href="#">Data Science</a></li>
        <li className='text-xl'><a href="#">IOT</a></li>
    </ul>
    </div>
    </>
  )
}

export default Navbar