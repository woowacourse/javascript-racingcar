import Condition from '../constant/Condition.js';

const { RANDOM } = Condition;

class Random {
  static pickNumberZeroToNine() {
    return Math.floor(Math.random() * RANDOM.RANGE);
  }
}

export default Random;
