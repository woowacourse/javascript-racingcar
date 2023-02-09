const { GAME_NUMBER } = require('../constants');

const isMove = () => {
  return Math.random() * GAME_NUMBER.moveRange >= GAME_NUMBER.moveStandard;
};

module.exports = isMove;
