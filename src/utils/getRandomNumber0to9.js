import { MAX_RANDOM_NUMBER } from '../constants/configurations.js';

function getRandomNumber0to9() {
  return Math.floor(Math.random() * MAX_RANDOM_NUMBER);
}

export default getRandomNumber0to9;
