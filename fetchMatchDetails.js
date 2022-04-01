const { default: axios } = require("axios");
const { baseUrl, matchDetailsEndpoint, apiKey } = require("./config");

const fetchMatchDetails = matchId => axios
  .get(`${baseUrl}${matchDetailsEndpoint}${matchId}?api_key=${apiKey}`)
  .then(res => res.data)
  .then(matchDetails => {
    console.log(matchDetails);
    return matchDetails;
  });

module.exports = fetchMatchDetails;
