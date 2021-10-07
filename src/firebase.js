// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,

//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
