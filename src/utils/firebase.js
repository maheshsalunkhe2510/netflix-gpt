// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSjqazykNn1Lx3bhRrbtqBUFVq6UyCoE",
  authDomain: "netflixgpt-be7bd.firebaseapp.com",
  projectId: "netflixgpt-be7bd",
  storageBucket: "netflixgpt-be7bd.appspot.com",
  messagingSenderId: "162684379604",
  appId: "1:162684379604:web:f91d5f6284b2aa83ffb641",
  measurementId: "G-TQZMJVDZ8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Initialize Firebase");
const analytics = getAnalytics(app);

export const auth = getAuth();