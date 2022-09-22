import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUprmm9jbnijAncq-9tst7U-Gm7SOHPd0",
  authDomain: "twitter-clone-5470f.firebaseapp.com",
  projectId: "twitter-clone-5470f",
  storageBucket: "twitter-clone-5470f.appspot.com",
  messagingSenderId: "276771126920",
  appId: "1:276771126920:web:1c3c363460fa8c869ca93d",
  measurementId: "G-Q6MM6LLY28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;