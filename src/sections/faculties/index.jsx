import { useEffect, useState } from "react";
import FacultyCarousel from "./FacultyCarousel";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/firestore";

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const getLab02Faculties = async () => {
      const facultiesRef = collection(db, "faculty");
      const q = query(facultiesRef, where("lab", "array-contains", "01"));
      const querySnapshot = await getDocs(q);
      const fetchedFaculties = querySnapshot.docs.map((doc) => doc.data());
      setFaculties(fetchedFaculties);
    };

    getLab02Faculties();
  }, []);

  return (
    <>
      <main className="w-full h-fit py-6 px-10 max-w-[90%] mx-auto flex flex-col gap-4 items-center">
        <hr className="w-full" />
        <h1 className="text-4xl font-bold text-center">Faculties</h1>
        <FacultyCarousel data={faculties} />
      </main>
    </>
  );
};

export default Faculties;
