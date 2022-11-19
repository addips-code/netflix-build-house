import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwxz2tf8oprX7_ke9KZhf58dPWWAhPTQQ",
    authDomain: "netflix-clone-house.firebaseapp.com",
    projectId: "netflix-clone-house",
    storageBucket: "netflix-clone-house.appspot.com",
    messagingSenderId: "527702152734",
    appId: "1:527702152734:web:383c3034663da6eb94800f"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;