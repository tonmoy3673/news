// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXubjRuh6nwpA33ZcoXCeGGPK9gG3mbOU",
  authDomain: "news-bfe65.firebaseapp.com",
  projectId: "news-bfe65",
  storageBucket: "news-bfe65.appspot.com",
  messagingSenderId: "570646978388",
  appId: "1:570646978388:web:5d1ad7ff39b693d231b2c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;