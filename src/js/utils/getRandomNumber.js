import { Number } from "./constants.js";

export const getRandomNumber = () => {
  return Math.floor(Math.random() * Number.MAX_NUM + 1);
};