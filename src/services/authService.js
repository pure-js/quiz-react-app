import 'firebase/auth';

import firebaseService from './firebaseService';

const auth = firebaseService.auth();

const signIn = auth.signInAnonymously();

const onRegister = auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

export { auth, signIn, onRegister };
