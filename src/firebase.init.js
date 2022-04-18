// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyBKCHqwJjb0KQ71rC09x7uksyCRr9KYjLo",
    // authDomain: "fitness-guru-assignment-10.firebaseapp.com",
    // projectId: "fitness-guru-assignment-10",
    // storageBucket: "fitness-guru-assignment-10.appspot.com",
    // messagingSenderId: "1035866170873",
    // appId: "1:1035866170873:web:d50de19864676ea9648928"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_SBUCKET,
    messagingSenderId: process.env.REACT_APP_MSID,
    appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;