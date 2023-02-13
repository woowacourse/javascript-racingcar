import { RANDOM_NUMBER_RANGE } from './Constant.js';

const generateRandomNumber = {
  generator(minNumber, maxNumber) {
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
  },
};

export default generateRandomNumber;
