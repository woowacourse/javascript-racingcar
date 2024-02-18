import Condition from '../constant/Condition.js';

const { RANDOM } = Condition;

const Random = {
  pickNumberZeroToNine() {
    return Math.floor(Math.random() * RANDOM.RANGE);
  },
};

export default Random;
