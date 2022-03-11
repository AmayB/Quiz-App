import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKh7FE1tcbAVeba5IiKmr8SyrwCax1pi4",
  authDomain: "quiz-master-app-b7c93.firebaseapp.com",
  databaseURL: "https://quiz-master-app-b7c93-default-rtdb.firebaseio.com",
  projectId: "quiz-master-app-b7c93",
  storageBucket: "quiz-master-app-b7c93.appspot.com",
  messagingSenderId: "474055088074",
  appId: "1:474055088074:web:2f551f424f7fc724a62133"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()