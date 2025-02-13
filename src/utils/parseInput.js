import { NAME_DELIMITER } from "../constants/Constants.js";

const parseInput = {
  car(carNameList) {
    return carNameList.split(NAME_DELIMITER);
  },
};

export default parseInput;
