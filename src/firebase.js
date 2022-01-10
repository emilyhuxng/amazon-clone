import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUV15vbuuWFHaOoVwoIi3cDxXPCQxEkUY",
    authDomain: "clone-aae13.firebaseapp.com",
    projectId: "clone-aae13",
    storageBucket: "clone-aae13.appspot.com",
    messagingSenderId: "581486448290",
    appId: "1:581486448290:web:a564b45ce61b63525191fb",
    measurementId: "G-M1LMHL4Q0Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };