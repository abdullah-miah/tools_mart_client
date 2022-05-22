// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5mODNHkkKcxj8Qo8tIvF6zp0vuKDlyLg",
  authDomain: "tools-mart.firebaseapp.com",
  projectId: "tools-mart",
  storageBucket: "tools-mart.appspot.com",
  messagingSenderId: "822225882228",
  appId: "1:822225882228:web:1dc74683551e9650341521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;