const fs = require('fs');

const param = process.argv.slice(2)[0];
const folderName = 'exercises';

function getFilesList(folder) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

function getFileContent(name, file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve({
        name,
        value: data,
      });
    });
  });
}

function getFilesContent(folder, files) {
  const arr = [];
  const { length } = files;
  for (let i = 0; i < length; i += 1) {
    const file = folder + '/' + files[i];

    if (file.slice(-2) === 'js') {
      arr.push(getFileContent(files[i].slice(0, -3), file));
    }
  }

  return arr;
}

getFilesList(folderName).then((files) => {
  const zo = getFilesContent(folderName, files);
  return Promise.all(zo);
}).then((content) => {
  const paramFolder = param.substring(0, param.indexOf('/'));

  fs.mkdir(paramFolder, () => {
    fs.writeFile(param, 'const questions = ' + JSON.stringify(content, null, 2) + ';\nexport default questions;\n', 'utf8', (err) => {
      if (err) throw err;
    });
  });
});
