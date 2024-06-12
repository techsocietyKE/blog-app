// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-7c246.firebaseapp.com",
  projectId: "mern-blog-7c246",
  storageBucket: "mern-blog-7c246.appspot.com",
  messagingSenderId: "926482465555",
  appId: "1:926482465555:web:68dec61b120c50223e90e6",
  measurementId: "G-1E3EHSTT6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);