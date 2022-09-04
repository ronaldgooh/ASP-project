// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2N7WlY5ck2RpfznNoi1ec-xN5es1xdY",
  authDomain: "fixlah-database.firebaseapp.com",
  databaseURL: "https://fixlah-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fixlah-database",
  storageBucket: "fixlah-database.appspot.com",
  messagingSenderId: "74909962863",
  appId: "1:74909962863:web:9733d334dea183154f739a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app