const { default: axios } = require("axios");
const { baseUrl, matchIdsListEndpoint, apiKey } = require("./config");

const fetchMatchIds = () => axios.get(`${baseUrl}${matchIdsListEndpoint}?api_key=${apiKey}`)
  .then(res => res.data)
  .then(matchIds => {
    console.log(matchIds);
    return matchIds;
  });

module.exports = fetchMatchIds;
