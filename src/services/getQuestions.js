import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
  authDomain: 'js-quiz-31f79.firebaseapp.com',
  databaseURL: 'https://js-quiz-31f79.firebaseio.com',
  projectId: 'js-quiz-31f79',
  storageBucket: '',
  messagingSenderId: '456338520035',
};
firebase.initializeApp(config);

const db = firebase.firestore();

db.collection('users')
  .add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
