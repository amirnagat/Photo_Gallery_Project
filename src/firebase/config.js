import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5w6k08PM3g60WKwtiV31PH5J3pU6jNHo",
    authDomain: "photo-gallery-project-779c4.firebaseapp.com",
    projectId: "photo-gallery-project-779c4",
    storageBucket: "photo-gallery-project-779c4.appspot.com",
    messagingSenderId: "738175209511",
    appId: "1:738175209511:web:708231a119a140b00fbe02"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
   

  export {projectStorage,projectFireStore}