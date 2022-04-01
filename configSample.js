const player = {
  "puuid": "your riot account puuid",
  "gameName": "your riot account player name",
  "tagLine": "the 4 digits number associated to your Riot account"
};

const baseUrl = 'https://americas.api.riotgames.com';
const matchIdsListEndpoint = `/lor/match/v1/matches/by-puuid/${player.puuid}/ids`;
const matchDetailsEndpoint = `/lor/match/v1/matches/`;
const apiKey = 'Api Key generated at https://developer.riotgames.com';

module.exports = {
  player,
  baseUrl,
  matchIdsListEndpoint,
  matchDetailsEndpoint,
  apiKey,
  apiMaxReqsPerSec: 20
};
