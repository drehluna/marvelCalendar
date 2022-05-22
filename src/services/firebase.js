
import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKv8f3pW_uVrQCvRMdp9AVbc6TOswWkN8",
  authDomain: "authenticationmarvel.firebaseapp.com",
  projectId: "authenticationmarvel",
  storageBucket: "authenticationmarvel.appspot.com",
  messagingSenderId: "347137209228",
  appId: "1:347137209228:web:13b0ab2f5fda960f8edca9"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()

export { firebase , auth}
