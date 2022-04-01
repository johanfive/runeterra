const { apiMaxReqsPerSec } = require('./config');
const fetchMatchDetails = require('./fetchMatchDetails');
const saveMatchDetails = require('./saveMatchDetails');
const { chop, busyWaiting } = require('./utils');

const recursiveFetch = (ids = []) => {
  const batch = ids.shift();
  const promz = batch.map(matchId => fetchMatchDetails(matchId).then(saveMatchDetails));
  return Promise.all(promz)
    .then(() => busyWaiting(2000))
    .then(() => {
      if (ids.length > 0) {
        return recursiveFetch(ids);
      }
    });
};

const throttle = (allMatchIds = []) => recursiveFetch(chop(allMatchIds, (apiMaxReqsPerSec - 1)));

module.exports = throttle;
