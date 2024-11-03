import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB5uekTq6R3OoLhqaLr-6t0EAC91zynXgo",
  authDomain: "sample-firebase-ai-f60d3.firebaseapp.com",
  databaseURL: "https://sample-firebase-ai-f60d3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sample-firebase-ai-f60d3",
  storageBucket: "sample-firebase-ai-f60d3.firebasestorage.app",
  messagingSenderId: "629530833838",
  appId: "1:629530833838:web:990b52898995c23f594e3f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };