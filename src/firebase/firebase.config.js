// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARAy0qItIZDIgb5UmQW_2sjMGIQmw6KnA",
  authDomain: "shop-ease-ae8b6.firebaseapp.com",
  projectId: "shop-ease-ae8b6",
  storageBucket: "shop-ease-ae8b6.appspot.com",
  messagingSenderId: "115604562011",
  appId: "1:115604562011:web:d626d1385e934866ce9f7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
