import { CAR_NAME_CONDITION } from "../../constants/Constants.js";

class IsValidCarNameList {
    static count(carNameList) {
      return carNameList.length >= CAR_NAME_CONDITION.COUNT_MIN;
    }
  
    static duplicate(carNameList) {
      return new Set(carNameList).size !== carNameList.length;
    }
  }
  
export default IsValidCarNameList;
  