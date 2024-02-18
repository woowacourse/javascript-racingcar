import Condition from '../constant/Condition.js';

const { RANDOM } = Condition;

const Random = {
  pickNumberInRange() {
    return Math.floor(Math.random() * RANDOM.RANGE);
  },
};

export default Random;
