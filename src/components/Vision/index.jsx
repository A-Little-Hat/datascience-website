import React, {useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/firestore'
import Card from '../Card'



const Vision = () => {
  const [visionCardData, setVisionCardData] = useState([]);

  useEffect(() => {
      getDocs(collection(db, "vision")).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          setVisionCardData([...visionCardData,doc.data()]);
        });
    })
  }, [])
  

  return (
    <div>
      {
        visionCardData && visionCardData.map((item, index) => (
          <Card data={item} key={index} />
        ))
      }
    </div>
  )
}

export default Vision