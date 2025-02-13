import { NAME_DELIMITER } from "../constants/Constants.js";

const parseInput = {
  car(carNameList) {
    return carNameList.split(NAME_DELIMITER).map((car) => car.trim());
  },
};

export default parseInput;
