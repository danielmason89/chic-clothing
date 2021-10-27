import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAtNy8t8PVTEEQDa6qWMouzGLvHw8FmouQ",
    authDomain: "chic-clothing-db.firebaseapp.com",
    projectId: "chic-clothing-db",
    storageBucket: "chic-clothing-db.appspot.com",
    messagingSenderId: "387896727378",
    appId: "1:387896727378:web:2b8b1c439d6475b8210c8b",
    measurementId: "G-CHR9KJ5ZVS"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;