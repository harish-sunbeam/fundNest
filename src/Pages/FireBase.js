// Import the functions you need from the SDKs you need

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhKnqnxhe6F_f2a6P5o5t6Y9gfM7kP4_w",
    authDomain: "mutual-fund-web-based-platform.firebaseapp.com",
    projectId: "mutual-fund-web-based-platform",
    storageBucket: "mutual-fund-web-based-platform.appspot.com",
    messagingSenderId: "64856070844",
    appId: "1:64856070844:web:73dde9a19feb3234a9ceb9",
    measurementId: "G-5W8F3GPF90"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;