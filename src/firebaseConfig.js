// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm5Kj1zMxW1y_9FADEceiN2RNOzzA-hA0",
  authDomain: "labcontactform.firebaseapp.com",
  projectId: "labcontactform",
  storageBucket: "labcontactform.appspot.com",
  messagingSenderId: "54016468814",
  appId: "1:54016468814:web:2712df4c355b468822a01f",
  measurementId: "G-PB8X5995Q5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
