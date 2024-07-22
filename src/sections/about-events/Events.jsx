import { AccordionDemo } from "./EventsAccordian";

const Events = () => {
  return (
    <div className="flex-1 rounded-sm shadow w-full">
      <h2 className="w-full text-2xl border-b py-2 text-center font-semibold">
        Events
      </h2>
      <div className="">
        <AccordionDemo />
      </div>
    </div>
  );
};

export default Events;
