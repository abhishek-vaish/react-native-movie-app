import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY3Kk5iso8GnHN7bmSN9zXRHtrPzYWZ8c",
  authDomain: "movve-5ab44.firebaseapp.com",
  projectId: "movve-5ab44",
  storageBucket: "movve-5ab44.appspot.com",
  messagingSenderId: "77640737481",
  appId: "1:77640737481:web:b432f5c03543b44ac6a318",
  measurementId: "G-MCYJ7CTKGK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
export { auth };
