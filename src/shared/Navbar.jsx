import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <div className="px-12 max-md:px-6 h-min-[8vh] flex justify-between items-center bg-blue-800 text-white">
        <div className="flex py-3 items-center justify-start gap-4 w-[25rem]">
          <img
            className="w-10 h-10"
            src="https://www.caluniv-ucsta.net/images/logo.png"
            alt="Calcutta University Logo"
          />
          <h3 className="text-xl font-semibold heading max-md:text-base">
            University of Calcutta
          </h3>
        </div>
        <ul className="hidden md:flex p-2 items-start gap-4">
          <li className="text-lg">
            <a href="#">Data Science</a>
          </li>
          <li className="text-lg">
            <a href="#">IOT</a>
          </li>
        </ul>
        <div className="md:hidden">
          <MobileNav />
        </div>
        {/* <div className="md:hidden flex justify-between items-center h-full w-full">
          <img
            className="w-10 h-10"
            src="https://www.caluniv-ucsta.net/images/logo.png"
            alt="Calcutta University Logo"
          />
          <MobileNav />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
