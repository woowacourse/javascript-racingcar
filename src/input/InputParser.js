import { NAME_DELIMITER } from '../constants/Constants.js';

const InputParser = {
  car(carNameList) {
    return carNameList.split(NAME_DELIMITER).map((car) => car.trim());
  },
  attempt(attemptInput) {
    return Number(attemptInput);
  },
};

export default InputParser;
