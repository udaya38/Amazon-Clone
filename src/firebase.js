import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC34ZNMj_KYBeKA2hvl7Xzxky6QqQAEN7A",
  authDomain: "clone-e0fa4.firebaseapp.com",
  projectId: "clone-e0fa4",
  storageBucket: "clone-e0fa4.appspot.com",
  messagingSenderId: "1097260029812",
  appId: "1:1097260029812:web:f4f1aaca15685792523e21"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
