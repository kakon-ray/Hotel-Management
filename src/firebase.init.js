// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEdKhBx3qphPvK-Ar2_Q7hzI7bgd5BWU",
  authDomain: "hotel-management-140c3.firebaseapp.com",
  projectId: "hotel-management-140c3",
  storageBucket: "hotel-management-140c3.appspot.com",
  messagingSenderId: "1061654619099",
  appId: "1:1061654619099:web:81dfe0b17396280b3c3dfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
