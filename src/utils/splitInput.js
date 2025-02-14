import { NAME_DELIMITER } from '../constants/ValidatorConstants.js';

function splitInput(input) {
  return input.split(NAME_DELIMITER).map((element) => element.trim());
}

export default splitInput;
