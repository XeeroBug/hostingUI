// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxW15-pQPDcRYgeO_dOkfbywzfpDDj_Y",
  authDomain: "hosting-ffbb5.firebaseapp.com",
  projectId: "hosting-ffbb5",
  storageBucket: "hosting-ffbb5.firebasestorage.app",
  messagingSenderId: "934077450567",
  appId: "1:934077450567:web:2de09d8f48b6439207e462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


 
