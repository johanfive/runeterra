const { readdir, readFile, writeFile } = require('fs/promises');
const path = require('path');
const existingRecords = require('./games.json');

const mergeFiles = () => {
  const tempFiles = path.join(__dirname, 'tmp');
  
  const readEachFile = (fileNames = []) => {
    const fileContents = fileNames.map(fileName => readFile(path.join(tempFiles, fileName)));
    return Promise.all(fileContents)
      .then(allContent => allContent.reduce((data, content) => {
        const matchDetails = JSON.parse(content.toString());
        data[matchDetails.metadata.match_id] = matchDetails;
        return data;
      }, {}));
  };

  return readdir(tempFiles)
    .then(readEachFile)
    .then(newMatchRecords => ({ ...existingRecords, ...newMatchRecords }))
    .then((data) => writeFile(path.join(tempFiles, 'games.json'), JSON.stringify(data, null, 2)));
};

module.exports = mergeFiles;
