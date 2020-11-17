importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyADj1SL6bx4OYF6W90TYlgqdfG2jMRHdno",
    authDomain: "notification-app-d913f.firebaseapp.com",
    databaseURL: "https://notification-app-d913f.firebaseio.com",
    projectId: "notification-app-d913f",
    storageBucket: "notification-app-d913f.appspot.com",
    messagingSenderId: "34610114340",
    appId: "1:34610114340:web:bccd03fb8aeee25a838db1"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.messaging();