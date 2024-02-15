import Condition from '../constant/Condition.js';

const { RANDOM } = Condition;

class Random {
  static pickNumberZeroToNine() {
    return Math.floor(Math.random() * RANDOM.range);
  }
}

export default Random;
