// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb6N1MqtDCB1hhZrcNH_hnp23RwrKm1bE",
  authDomain: "madie-s-blog.firebaseapp.com",
  projectId: "madie-s-blog",
  storageBucket: "madie-s-blog.firebasestorage.app",
  messagingSenderId: "313214808698",
  appId: "1:313214808698:web:d7546e97fb6761fd75c1c3",
  measurementId: "G-JYSVXV57RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);