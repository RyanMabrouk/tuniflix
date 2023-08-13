// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuBl6kD4VD0EO46YBF2KBeNOIgva3-Jwk",
  authDomain: "tunifilm-eeca8.firebaseapp.com",
  projectId: "tunifilm-eeca8",
  storageBucket: "tunifilm-eeca8.appspot.com",
  messagingSenderId: "397214936596",
  appId: "1:397214936596:web:235bd14a0face8c1b98101",
  measurementId: "G-Y0KHJG6R12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);