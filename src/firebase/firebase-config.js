import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW4QQTz0lkTcLNh_GQS2iwQwKboz50alA",
  authDomain: "react-app-cursos-e5737.firebaseapp.com",
  projectId: "react-app-cursos-e5737",
  storageBucket: "react-app-cursos-e5737.appspot.com",
  messagingSenderId: "1030891749623",
  appId: "1:1030891749623:web:3830a477ad79ff1111d3f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}