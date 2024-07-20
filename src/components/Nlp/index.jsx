import React, {useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/firestore'
import Card from '../Card'



const Nlp = () => {
  const [nlpCardData, setNlpCardData] = useState([]);

  useEffect(() => {
      getDocs(collection(db, "nlp")).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          setNlpCardData([...nlpCardData,doc.data()]);
        });
    })
  }, [])
  

  return (
    <div>
      {
        nlpCardData && nlpCardData.map((item, index) => (
          <Card data={item} key={index} />
        ))
      }
    </div>
  )
}

export default Nlp