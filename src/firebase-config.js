// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoo9Cd_vzNF8J4p4cptDxGkjgCALgsLBQ",
  authDomain: "easy-house-rent-aa7f8.firebaseapp.com",
  projectId: "easy-house-rent-aa7f8",
  storageBucket: "easy-house-rent-aa7f8.appspot.com",
  messagingSenderId: "573820677500",
  appId: "1:573820677500:web:64d37db2e8da484f9188f9",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);