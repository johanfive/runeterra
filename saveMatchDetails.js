const { writeFile, mkdir } = require('fs/promises');
const path = require('path');

const saveMatchDetails = (matchDetails) => {
  const tmp = path.join(__dirname, 'tmp');
  return mkdir(tmp, { recursive: true })
    .then(() => writeFile(
      path.join(tmp, `${matchDetails.metadata.match_id}.json`),
      JSON.stringify(matchDetails, null, 2),
    ));
};

module.exports = saveMatchDetails;
