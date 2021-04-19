import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDM2tdO--f4eQ-zt7aiSeUWo3mgXG58Oz8",
  authDomain: "finalyearprojectapp-fa0ee.firebaseapp.com",
  projectId: "finalyearprojectapp-fa0ee",
  storageBucket: "finalyearprojectapp-fa0ee.appspot.com",
  messagingSenderId: "905601515689",
  appId: "1:905601515689:web:2a7337ca8cdf2523d529b8",
  measurementId: "G-6RKJ6DD3SQ",
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const database=firebaseApp.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const storage = firebase.storage()

export { auth,googleProvider,facebookProvider,storage,database };
export default db;