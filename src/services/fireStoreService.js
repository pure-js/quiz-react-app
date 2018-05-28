// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
  authDomain: 'js-quiz-31f79.firebaseapp.com',
  databaseURL: 'https://js-quiz-31f79.firebaseio.com',
  projectId: 'js-quiz-31f79',
  storageBucket: '',
  messagingSenderId: '456338520035',
};

const initApp = firebase.initializeApp(config).firestore();
initApp.settings({
  timestampsInSnapshots: true,
});
const app = firebase.app().firestore();

export default !firebase.apps.length ? initApp : app;
