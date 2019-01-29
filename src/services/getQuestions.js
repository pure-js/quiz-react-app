import { functions } from './fireStoreService';

function getRandomDocument(collection) {
  const randomQuestion = functions.httpsCallable('randomQuestion');
  return randomQuestion(collection);
}

export default getRandomDocument;
