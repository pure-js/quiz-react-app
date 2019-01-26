// @flow
import 'firebase/firestore';
import 'firebase/functions';
import firebaseService from './firebaseService';

const firestore = firebaseService.firestore();
const functions = firebaseService.functions();

export {
  firestore as default,
  functions,
};
