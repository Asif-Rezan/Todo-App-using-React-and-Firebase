import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBZhuPJZ_ud1xncxFZLBdPQu0F1aT_-Qbs",
    authDomain: "todo-app-d0857.firebaseapp.com",
    projectId: "todo-app-d0857",
    storageBucket: "todo-app-d0857.appspot.com", 
    messagingSenderId: "87362762491",
    appId: "1:87362762491:web:5196c1eafbf59c5e12225e",
    measurementId: "G-104SK0X2ZN"

});
const db=firebaseApp.firestore();
 
export default db;
