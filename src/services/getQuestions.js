// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';

function getDocument(id) {
  const config = {
    apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
    authDomain: 'js-quiz-31f79.firebaseapp.com',
    databaseURL: 'https://js-quiz-31f79.firebaseio.com',
    projectId: 'js-quiz-31f79',
    storageBucket: '',
    messagingSenderId: '456338520035',
  };

  firebase.initializeApp(config);

  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true,
  };
  firestore.settings(settings);

  return firestore.collection('questions').doc(id).get();
}

export { getDocument as default };
