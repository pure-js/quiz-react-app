// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';

import getRand from './getRandomNumber';

function initialize() {
  const config = {
    apiKey: 'AIzaSyBWqAJaKIFIYK-emBHU2gfvdFy9qo9uSIo',
    authDomain: 'js-quiz-31f79.firebaseapp.com',
    databaseURL: 'https://js-quiz-31f79.firebaseio.com',
    projectId: 'js-quiz-31f79',
    storageBucket: '',
    messagingSenderId: '456338520035',
  };

  firebase.initializeApp(config);
}

function getDocument(id: string, collection: string) {
  // initialize();
  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true,
  };
  firestore.settings(settings);
  return firestore.collection(collection).doc(id).get();
}

function getRandomId(collection) {
  initialize();
  const db = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true,
  };
  db.settings(settings);

  const documentsIds = [];

  return db.collection(collection).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        documentsIds.push(doc.id);
      });
    })
    .then(() => {
      const { length } = documentsIds;
      const random = getRand(length - 1);
      const id = documentsIds[random];
      return id;
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
}

async function getRandomDocument(collection: string) {
  const id = await getRandomId(collection);
  return getDocument(id, collection);
}

export {
  getDocument as default,
  getRandomDocument,
};
