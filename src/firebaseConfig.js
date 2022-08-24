// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzRdAb4YO0jyvtL1m-SlYpyE7MyuGXQs",
  authDomain: "tecnocity-91cb9.firebaseapp.com",
  projectId: "tecnocity-91cb9",
  storageBucket: "tecnocity-91cb9.appspot.com",
  messagingSenderId: "156508416179",
  appId: "1:156508416179:web:b9a0964ee3475d253ca8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;