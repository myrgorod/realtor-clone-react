// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDddFScUabBuV4xjeKNd6FGwgsoUylIBUk",
  authDomain: "realtor-clone-react-fa2a3.firebaseapp.com",
  projectId: "realtor-clone-react-fa2a3",
  storageBucket: "realtor-clone-react-fa2a3.appspot.com",
  messagingSenderId: "241222517093",
  appId: "1:241222517093:web:cc5126fb25d4da2d5ee18c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
