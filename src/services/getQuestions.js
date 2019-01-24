// @flow
import getRand from './floatToInteger';
import database from './fireStoreService';
import { signIn, onRegister } from './authService';

let getDocumentsLength = 0;

function getDocument(id: string, collection: string) {
  return database.collection(collection).doc(id).get();
}

function getRandomId(collection) {
  const documentsIds = [];
  return database.collection(collection).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        documentsIds.push(doc.id);
      });
    })
    .then(() => {
      const { length } = documentsIds;
      getDocumentsLength = length;
      const random = getRand(length - 1);
      return documentsIds[random];
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
  getDocumentsLength,
};
