const fs = require('fs');

const folderName = 'exercises';
const output = '.tmp/exercises.js';

function getFilesList(folder) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function getFileContent(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function getFilesContent(folder, files) {
  let arr = [];
  const length = files.length;
  for (let i = 0; i < length; i++) {
    const file = folder + '/' + files[i];
    if (file.slice(-2) === 'js') arr.push(getFileContent(file));
  }

  return arr;
}

getFilesList(folderName).then((files) => {
  const zo = getFilesContent(folderName, files);
  return Promise.all(zo);
}).then(content => fs.writeFile(output, content, 'utf8'));
