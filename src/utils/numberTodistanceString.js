const { OUTPUT_MESSAGE } = require('./constants');

function numberToDistanceString(number) {
  let str = '';
  for (let index = 0; index < number; index++) {
    str += OUTPUT_MESSAGE.DISTANCE;
  }

  return str;
}

module.exports = numberToDistanceString;
