const { MESSAGE } = require('../constants/messages');

const getPositionLine = position => {
  return Array(position)
    .fill()
    .map(() => '-')
    .join('');
};

const getRacingSnapShot = car => {
  const positionLine = getPositionLine(car.position);

  return `${car.name} : ${positionLine}`;
};

const getWinnersMessage = winnerSet => {
  return `${winnerSet.join(',')}${MESSAGE.WINNERS}`;
};

module.exports = { getWinnersMessage, getRacingSnapShot };
