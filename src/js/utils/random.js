import { MAX_RANDOM_NUMBER } from "./constants.js";

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * MAX_RANDOM_NUMBER);
};
