import { MAX_NUMBER, MIN_NUMBER } from '../constants/index.js';

export const getRandomNumber = () =>
  Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
