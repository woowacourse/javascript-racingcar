const { GAME_VALUE } = require('./constants');

const randomGenerator = {
  generateNumber: () => Math.floor(Math.random() * GAME_VALUE.MAX_RANGE),
};

module.exports = { randomGenerator };
