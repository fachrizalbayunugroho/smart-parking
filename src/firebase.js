import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
//isi
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };