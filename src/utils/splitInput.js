import { DELIMITER } from '../constants/MAGIC_NUMBER.js';

function splitInput(input) {
  return input.split(DELIMITER).map((element) => element.trim());
}

export default splitInput;
