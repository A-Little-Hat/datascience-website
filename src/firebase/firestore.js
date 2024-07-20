import { getFirestore } from "firebase/firestore";
import fireApp from './config'


const db = getFirestore(fireApp);
export default db;