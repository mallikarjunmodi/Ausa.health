import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrLWPAoQbmqB9E8WgP-3iYWN3Jnu-TfVk",
  authDomain: "prar-fe0ad.firebaseapp.com",
  databaseURL: "https://prar-fe0ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prar-fe0ad",
  storageBucket: "prar-fe0ad.appspot.com",
  messagingSenderId: "517687866268",
  appId: "1:517687866268:web:0878331f5eefe7b95ace59"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };