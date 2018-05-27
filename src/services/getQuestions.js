// @flow
import getRand from './getRandomNumber';
import database from './fireStoreService';

let getDocumentsLength = 0;

function getDocument(id: string, collection: string) {
  return database.collection(collection).doc(id).get();
}

function getRandomId(collection) {
  const documentsIds = [];
  const settings = {
    timestampsInSnapshots: true,
  };
  database.settings(settings);

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
      const id = documentsIds[random];
      return id;
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
