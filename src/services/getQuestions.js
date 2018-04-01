import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
  authDomain: 'js-quiz-31f79.firebaseapp.com',
  databaseURL: 'https://js-quiz-31f79.firebaseio.com',
  projectId: 'js-quiz-31f79',
  storageBucket: '',
  messagingSenderId: '456338520035',
};
firebase.initializeApp(config);

function getData() {
  const db = firebase.firestore();

  return db.collection('questions').get();
}

export { getData as default };
