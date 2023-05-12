import 'firebase/firestore';
import 'firebase/functions';
import firebaseService from './firebaseService';

const firestore = firebaseService.firestore();
const functions = firebaseService.functions('europe-west1');

export { functions };
export default firestore;
