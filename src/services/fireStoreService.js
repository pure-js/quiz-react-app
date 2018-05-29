// @flow
import firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseService from './firebaseService';

const initApp = firebaseService.firestore();
initApp.settings({
  timestampsInSnapshots: true,
});
const app = firebaseService.firestore();

export default !firebase.apps.length ? initApp : app;
