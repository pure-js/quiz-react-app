// @flow
import 'firebase/auth';

import firebaseService from './firebaseService';

const auth = firebaseService.auth();

const signIn = auth
  .signInAnonymously()
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

const onRegister = auth
  .onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      const { uid, isAnonymous } = user;
      console.log(uid);
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });

export { auth, signIn, onRegister };
