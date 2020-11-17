import firebase from 'firebase';

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
  const messaging = firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN => ", currentToken);
                } else {
                  console.log('No registration token available. Request permission to generate one.');
          
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}