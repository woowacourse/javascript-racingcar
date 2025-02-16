import { CAR_NAME_CONDITION } from "../../constants/Constants.js";

class IsValidCarNameList {
    static count(carNameList) {
      return carNameList.length >= CAR_NAME_CONDITION.COUNT_MIN;
    }
  
    static nameLengthMin(carNameList) {
      return carNameList.every((carName) => 
        carName.trim().length >= CAR_NAME_CONDITION.LENGTH_MIN
      );
    }
  
    static nameLengthMax(carNameList) {
      return carNameList.every((carName) => 
        carName.trim().length <= CAR_NAME_CONDITION.LENGTH_MAX
      );
    }
  
    static duplicate(carNameList) {
      return new Set(carNameList).size !== carNameList.length;
    }
  }
  
export default IsValidCarNameList;
  