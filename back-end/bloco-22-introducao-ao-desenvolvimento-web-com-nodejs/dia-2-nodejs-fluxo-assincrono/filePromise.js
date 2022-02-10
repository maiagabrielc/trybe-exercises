const fs = require('fs');

function readFilePromise (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('./file.txt')
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });