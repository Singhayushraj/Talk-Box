import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXe1D--c5nunSqxOG6n1hbZQrpva6B_Qk",
  authDomain: "whatsapp-clone-793e2.firebaseapp.com",
  projectId: "whatsapp-clone-793e2",
  storageBucket: "whatsapp-clone-793e2.appspot.com",
  messagingSenderId: "489124048151",
  appId: "1:489124048151:web:22af1b3c8060c20c939b52",
  measurementId: "G-3XTFJVHX54",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
