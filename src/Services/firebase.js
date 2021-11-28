// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhlywq-HHUc0mMkX6v24b5DeqsTzswz7A",
  authDomain: "react-course-bas.firebaseapp.com",
  databaseURL: "https://react-course-bas-default-rtdb.firebaseio.com",
  projectId: "react-course-bas",
  storageBucket: "react-course-bas.appspot.com",
  messagingSenderId: "390455142693",
  appId: "1:390455142693:web:644a22876d48afdd2852cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);