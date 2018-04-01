import * as firebase from 'firebase';
import 'firebase/firestore';

function getData() {
  const config = {
    apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
    authDomain: 'js-quiz-31f79.firebaseapp.com',
    databaseURL: 'https://js-quiz-31f79.firebaseio.com',
    projectId: 'js-quiz-31f79',
    storageBucket: '',
    messagingSenderId: '456338520035',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.firestore();

  return db.collection('questions').get();
}

export { getData as default };
