import { OPTION } from '../constants/System.js';

export default function getRandomNum() {
  return Math.floor(Math.random() * OPTION.RANDOM_RANGE);
}
