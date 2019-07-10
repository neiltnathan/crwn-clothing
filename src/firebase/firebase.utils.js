import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFMPfPtNj1UOKXllP7TJxpT9WeHmXkI6A",
  authDomain: "crwn-db-52ecf.firebaseapp.com",
  databaseURL: "https://crwn-db-52ecf.firebaseio.com",
  projectId: "crwn-db-52ecf",
  storageBucket: "",
  messagingSenderId: "114864692115",
  appId: "1:114864692115:web:cfe45a3c666a4bde"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
