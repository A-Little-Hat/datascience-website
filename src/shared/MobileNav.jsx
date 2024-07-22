import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import NavMenus from "./NavMenus";
const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <HiMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-baseline">
          <SheetTitle className="logo px-2 pt-4">
            <a href={"/"} className="flex gap-2 items-center justify-start">
              <img
                className="w-8 h-8"
                src="https://www.caluniv-ucsta.net/images/logo.png"
                alt="Calcutta University Logo"
              />
              <h2 className="font-bold text-base">University of Calcutta</h2>
            </a>
          </SheetTitle>
          <NavMenus />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
