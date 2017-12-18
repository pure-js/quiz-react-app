const fs = require('fs');
const param = process.argv.slice(2)[0];

const folderName = 'exercises';
const folder = param.substring(0, param.indexOf('/'));

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
        name: name,
        value: data,
      });
    });
  });
}

function getFilesContent(folder, files) {
  let arr = [];
  const length = files.length;
  for (let i = 0; i < length; i++) {
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
}).then(content => {
  fs.mkdir(folder, () => {
    fs.writeFile(param, 'const questions = ' + JSON.stringify(content, null, 2) + ';\nexport default questions;\n', 'utf8', (err) => {
      if (err) throw err
    });
  });
});
