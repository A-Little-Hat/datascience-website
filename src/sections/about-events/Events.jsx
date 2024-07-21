import React from 'react'
import { AccordionDemo } from './EventsAccordian'

const Events = () => {
  return (
    <div className='flex-1 rounded-sm shadow'>
      <h2 className='w-full border-b py-2 text-center text-3xl font-semibold'>Events</h2>
      <div className=''>
        <AccordionDemo/>
      </div>
    </div>
  )
}

export default Events