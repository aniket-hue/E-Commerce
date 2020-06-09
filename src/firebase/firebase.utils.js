import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAkmLK87PNpaJSLsS_Sk9ld9iOJEzZvciQ",
    authDomain: "e-commerce-1125.firebaseapp.com",
    databaseURL: "https://e-commerce-1125.firebaseio.com",
    projectId: "e-commerce-1125",
    storageBucket: "e-commerce-1125.appspot.com",
    messagingSenderId: "705297503354",
    appId: "1:705297503354:web:600a1bef624dc0574857c3",
    measurementId: "G-C29Z47C214"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;