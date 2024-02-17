const CONDITIONS = require('../constant/Conditions.js');

const getNumberToDistanceSymbol = (num) => {
  return CONDITIONS.distance.repeat(num);
};

module.exports = getNumberToDistanceSymbol;
