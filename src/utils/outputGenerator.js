const { MESSAGE } = require('../constants/messages');
const { POSITION_SYMBOL } = require('../constants/values');

const getPositionLine = position => {
  return POSITION_SYMBOL.repeat(position);
};

const getRacingSnapShot = car => {
  return `${car.name} : ${getPositionLine(car.position)}`;
};

const getWinnersMessage = winnerSet => {
  return `${winnerSet.join(',')}${MESSAGE.WINNERS}`;
};

module.exports = { getWinnersMessage, getRacingSnapShot };
