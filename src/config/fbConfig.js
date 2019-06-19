import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCp0tYdUO9WIypzaQuzyDCRqb0uMa9vSw",
  authDomain: "gs-marioplan.firebaseapp.com",
  databaseURL: "https://gs-marioplan.firebaseio.com",
  projectId: "gs-marioplan",
  storageBucket: "gs-marioplan.appspot.com",
  messagingSenderId: "796866394838",
  appId: "1:796866394838:web:100bc9478491ad76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
