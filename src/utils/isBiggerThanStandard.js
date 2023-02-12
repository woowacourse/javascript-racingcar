const { MOVE_CHECK_NUMBER } = require('./constants');

function isBiggerThanStandard(number) {
  if (number >= MOVE_CHECK_NUMBER) return true;
  return false;
}

module.exports = isBiggerThanStandard;
