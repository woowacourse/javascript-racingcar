import { RANDOM_NUMBER_RANGE } from './Constant.js';

const generateRandomNumber = {
  generator() {
    return Math.floor(Math.random() * RANDOM_NUMBER_RANGE);
  },
};

export default generateRandomNumber;
