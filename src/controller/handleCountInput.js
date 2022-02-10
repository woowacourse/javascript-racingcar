import { ERROR, LIMIT } from '../util/constants.js';
import playRace from './playRace.js';

function isValidCount(inputCount) {
  //   if (cars.length === 0) {
  //     alert(ERROR.EMPTY_NAMES);
  //     return false;
  //   }
  if (+inputCount < LIMIT.MIN_LENGTH) {
    alert(ERROR.MIN_COUNT);
    return false;
  }
  return true;
}

export default function handleCountInput() {
  const inputCount = document.querySelector('.count-input').value;

  if (isValidCount(inputCount)) {
    playRace(inputCount);
  }
}
