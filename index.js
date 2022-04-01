const fetchMatchIds = require('./fetchMatchIds');
const mergeFiles = require('./mergeFiles');
const throttle = require('./throttle');

fetchMatchIds()
  .then(throttle)
  .then(mergeFiles)
  .then(() => console.log('Ok to to run cleanup.'))
  .catch(e => {
    const msg = e.toJSON?.()?.message || e.message || e;
    console.log(msg);
  })
  .finally(() => console.log('Done.'));
console.log('Patience... Wait for an explicit "Done" message.');