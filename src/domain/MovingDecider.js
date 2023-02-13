const GAME_RULE = require('../constant/gameRule');
const Random = require('../util/Random');

const MovingDecider = {
  getCarsMovingSuccesses(numberOfCars) {
    return Array.from({ length: numberOfCars }, () =>
      this.canMoveCar(
        Random.pickNumberInRange(
          GAME_RULE.RANDOM_LOWER_INCLUSIVE,
          GAME_RULE.RANDOM_UPPER_INCLUSIVE,
        ),
      ),
    );
  },

  canMoveCar(carMovingNumber) {
    return carMovingNumber >= GAME_RULE.MOVING_CONDITION_NUMBER;
  },
};

module.exports = MovingDecider;
