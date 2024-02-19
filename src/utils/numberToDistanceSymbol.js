const { SYMBOL } = require('../constant/Conditions');

const numberToDistanceSymbol = (num) => {
  return SYMBOL.distance.repeat(num);
};

module.exports = numberToDistanceSymbol;
