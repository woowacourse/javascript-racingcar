const pickNumberInRange = require('../utils/pickNumberInRange');
const { GAME_RULE } = require('../constants');

const MoveDecider = {
  getCarMoveSuccesses(carCount) {
    return Array.from({ length: carCount }, () => MoveDecider.isCarMove());
  },

  isCarMove() {
    return (
      pickNumberInRange(GAME_RULE.RANDOM_NUMBER_RANGE_START, GAME_RULE.RANDOM_NUMBER_RANGE_END) >=
      GAME_RULE.MOVING_CONDITION
    );
  },
};

module.exports = MoveDecider;
