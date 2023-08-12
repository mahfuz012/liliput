// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDum7Mv2xS3ih9ccPtbi7mF5-SQ5yBmDRY",
  authDomain: "freeflow-b7c73.firebaseapp.com",
  projectId: "freeflow-b7c73",
  storageBucket: "freeflow-b7c73.appspot.com",
  messagingSenderId: "255881883261",
  appId: "1:255881883261:web:aa4982f6582e94671a4b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app