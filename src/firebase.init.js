// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWWJhIJ2rMbiA3GURq-b4s0-ZKtRJjr1w",
    authDomain: "photographer-services-27349.firebaseapp.com",
    projectId: "photographer-services-27349",
    storageBucket: "photographer-services-27349.appspot.com",
    messagingSenderId: "397413119281",
    appId: "1:397413119281:web:e0011b4c27fef12eba2c10",
    measurementId: "G-BMPRXB4N0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;