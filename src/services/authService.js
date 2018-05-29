// @flow
import 'firebase/auth';

import firebaseService from './firebaseService';

const signIn = firebaseService.auth().signInAnonymously().catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // ...
});

const onRegister = firebaseService.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

export { signIn, onRegister };
