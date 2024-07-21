import {
  AlertDialog,
  //   AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Modal = ({ image, name, desc }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-blue-500 hover:underline">
        read more
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[90%] overflow-y-auto">
        <AlertDialogHeader>
          <div>
            <img
              className="w-36 h-36 rounded-[50%] object-cover object-center mx-auto"
              src={image}
              alt=""
            />
          </div>
          <AlertDialogTitle className="text-center text-xl">
            {name}
          </AlertDialogTitle>
          <AlertDialogDescription className="">{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
