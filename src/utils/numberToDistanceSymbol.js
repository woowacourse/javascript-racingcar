const CONDITIONS = require('../constant/Conditions.js');

const numberToDistanceSymbol = (num) => {
  return CONDITIONS.distance.repeat(num);
};

module.exports = numberToDistanceSymbol;
