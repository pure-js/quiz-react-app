// @flow
import firebase from 'firebase/app';
import 'firebase/auth';

const auth2 = firebase.auth().signInAnonymously();
// const auth2 = firebase.auth().signInAnonymously().catch((error) => {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // ...
// });

export default auth2;
