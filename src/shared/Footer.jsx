import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='h-[5vh] flex items-center justify-center bg-slate-950 text-white'>
        <p>Copyright &#xa9; {new Date().getFullYear()} | AKCSIT, University of Calcutta</p>
    </div>
    </>
  )
}

export default Footer