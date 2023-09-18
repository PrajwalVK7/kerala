// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO5C4ePZKsm9EnlnnohmOiHWXp8SChzhA",
  authDomain: "kerala-b9aa3.firebaseapp.com",
  projectId: "kerala-b9aa3",
  storageBucket: "kerala-b9aa3.appspot.com",
  messagingSenderId: "221832777794",
  appId: "1:221832777794:web:a0546f937b74b412969ddb",
  measurementId: "G-N7E8QGX532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);