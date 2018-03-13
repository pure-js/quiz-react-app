const fs = require('fs');
const util = require('util');
const recursive = require('recursive-readdir');

const param = process.argv.slice(2)[0];
const folderName = 'questions';

function getFileContent(name, category, file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve({
        name,
        category,
        value: data,
      });
    });
  });
}

function getFilesContent(folder, files) {
  const arr = [];
  const { length } = files;
  for (let i = 0; i < length; i += 1) {
    const file = files[i];
    let index = file.indexOf('/');
    let withoutFolder = file.substring(index + 1);
    let category = 'unclassified';
    index = withoutFolder.indexOf('/');
    if (index >= 0) {
      category = withoutFolder.substring(0, index);
      withoutFolder = withoutFolder.substring(index + 1);
    }
    // Remove file extension - .js
    const fileName = withoutFolder.slice(0, -3);
    arr.push(getFileContent(fileName, category, file));
  }

  return arr;
}

recursive(folderName)
  .then(files => Promise.all(getFilesContent(folderName, files)))
  .then((content) => {
    const paramFolder = param.substring(0, param.indexOf('/'));

    fs.mkdir(paramFolder, () => {
      fs.writeFile(param, `const questions =\n${util.inspect(content)};\n\nexport default questions;\n`, 'utf8', (err) => {
        if (err) throw err;
      });
    });
  });
