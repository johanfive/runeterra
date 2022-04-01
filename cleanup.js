const { rename, readdir, unlink } = require('fs/promises');
const path = require('path');

const tmp = path.join(__dirname, 'tmp');

const recursiveDelete = (fileNames = []) => {
  const fileName = fileNames.shift();
  const filePath = path.join(tmp, fileName);
  return unlink(filePath)
    .then(() => {
      if (fileNames.length > 0) {
        return recursiveDelete(fileNames);
      }
    });
}

const cleanup = () => {
  const oldPath = path.join(tmp, 'games.json');
  const newPath = path.join(__dirname, 'games.json');
  return rename(oldPath, newPath)
    .then(() => readdir(tmp))
    .then(recursiveDelete);
};

cleanup().catch(console.error).finally(() => console.log('Done. Ok to run stats.'));
