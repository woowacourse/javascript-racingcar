import { RANDOM_RANGE } from "../constants/games.js";

export const getRandomNumber = () =>
  Math.floor(Math.random() * (RANDOM_RANGE.MAX - RANDOM_RANGE.MIN + 1));
