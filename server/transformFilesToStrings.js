const fs = require('fs');
const recursive = require('recursive-readdir');

const param = process.argv.slice(2)[0];
const folderName = 'exercises';

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
    const index = file.indexOf('\\');
    const withoutParentFolder = file.substring(index + 1);
    let category = 'unclassified';
    if (withoutParentFolder.indexOf('\\') >= 0) {
      category = withoutParentFolder.substring(0, withoutParentFolder.indexOf('\\'));
    }
    const fileName = withoutParentFolder.slice(0, -3);
    arr.push(getFileContent(fileName, category, file));
  }

  return arr;
}

recursive(folderName)
  .then(files => Promise.all(getFilesContent(folderName, files)))
  .then((content) => {
    const paramFolder = param.substring(0, param.indexOf('/'));

    fs.mkdir(paramFolder, () => {
      fs.writeFile(param, 'const questions = ' + JSON.stringify(content, null, 2) + ';\nexport default questions;\n', 'utf8', (err) => {
        if (err) throw err;
      });
    });
  });
