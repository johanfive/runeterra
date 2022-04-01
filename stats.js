const { player } = require('./config.js');
const history = require('./games.json');

const stats = games => Object.keys(games)
  .map(gameId => games[gameId])
  .reduce((result, game) => {
    result.total = result.total + 1;
    const self = game.info.players[0].puuid === player.puuid
      ? game.info.players[0]
      : game.info.players[1];
    if (self.game_outcome === 'win') {
      result.totalWins = result.totalWins + 1;
      if (game.info.game_type === 'AI') {
        result.winsAgainstAi = result.winsAgainstAi + 1;
      } else {
        result.winsAgainstHuman = result.winsAgainstHuman + 1;
      }
      if (self.order_of_play === 1) {
        result.winsStartSecond = result.winsStartSecond + 1;
      } else {
        result.winsStartFirst = result.winsStartFirst + 1;
      }
    }
    const rawWinRatio = result.totalWins / result.total * 100;
    result.winRatio = Math.round((rawWinRatio + Number.EPSILON) * 100) / 100;
    return result;
  }, {
    winRatio: 0,
    total: 0,
    totalWins: 0,
    winsAgainstAi: 0,
    winsAgainstHuman: 0,
    winsStartFirst: 0,
    winsStartSecond: 0,
  });

console.log(stats(history));

module.exports = stats;
