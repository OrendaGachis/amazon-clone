import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBed21xo7EJcx5aVaadxC6MkjomoyUrww8",
  authDomain: "clone-518a8.firebaseapp.com",
  databaseURL: "https://clone-518a8.firebaseio.com",
  projectId: "clone-518a8",
  storageBucket: "clone-518a8.appspot.com",
  messagingSenderId: "79933148759",
  appId: "1:79933148759:web:4ed31b4554f2d3e9b49d12",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
