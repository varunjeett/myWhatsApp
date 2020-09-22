// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAI8p_mOT8hJeLdzhh059KAnlSuOEdHaiQ",
  authDomain: "mywhatsapp-47f81.firebaseapp.com",
  databaseURL: "https://mywhatsapp-47f81.firebaseio.com",
  projectId: "mywhatsapp-47f81",
  storageBucket: "mywhatsapp-47f81.appspot.com",
  messagingSenderId: "79447244204",
  appId: "1:79447244204:web:116019f23193d1c0a68e09",
  measurementId: "G-1PSYB0ZSM0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebase;
