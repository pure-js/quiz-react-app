// @flow
import 'firebase/firestore';
import 'firebase/functions';
import firebaseService from './firebaseService';

const firestore = firebaseService.firestore();
// firestore().enablePersistence()
//   .catch((err) => {
//     if (err.code === 'failed-precondition') {
//       console.error('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
//     } else if (err.code === 'unimplemented') {
//       console.error('The current browser does not support all of the features required to enable persistence');
//     }
//   });

const functions = firebaseService.functions('europe-west1');

export {
  firestore as default,
  functions,
};
