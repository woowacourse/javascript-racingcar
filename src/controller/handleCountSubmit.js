import { MIN_COUNT } from '../util/constants.js';
import { getCountErrorMessage } from '../model/getErrorMessage.js';
import $ from '../util/dom.js';
import alertError from '../view/alertError.js';
import playRace from './playRace.js';

function isValidCount(inputCount) {
  if (inputCount.length === 0) {
    return false;
  }
  if (+inputCount < MIN_COUNT) {
    return false;
  }
  return true;
}

export default function handleCountSubmit() {
  const inputCount = $('.count-input').value;

  if (isValidCount(inputCount)) {
    playRace(inputCount);
    return;
  }
  alertError(getCountErrorMessage(inputCount));
}
