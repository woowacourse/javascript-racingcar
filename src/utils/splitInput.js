import { DELIMITER } from '../constants/MagicNumber.js';

function splitInput(input) {
  return input.split(DELIMITER).map((element) => element.trim());
}

export default splitInput;
