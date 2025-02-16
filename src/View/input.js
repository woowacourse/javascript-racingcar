import { INPUT } from '../Constants/message.js';

import {
  validateCarsNameLength,
  validateCarsNameForm,
  validateDuplicatedCarName,
} from '../Validation/carName.js';

import {
  validateGameCountRange,
  validateGameCountType,
} from '../Validation/gameCount.js';

import readLineAsync from './utils.js';

export const getCarsName = async () => {
  const input = await readLineAsync(`${INPUT.CARS_NAME}\n`);

  try {
    validateCarsNameLength(input);
    validateCarsNameForm(input);
    validateDuplicatedCarName(input);
    return input;
  } catch (error) {
    console.error(error.message);
    return getCarsName();
  }
};

export const getGameCount = async () => {
  const input = await readLineAsync(`${INPUT.GAME_COUNT}\n`);

  try {
    validateGameCountType(input);
    validateGameCountRange(input);
    return input;
  } catch (error) {
    console.error(error.message);
    return getGameCount();
  }
};
