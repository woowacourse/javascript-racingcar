import { ERROR } from "./constant/constant.js";
const { DUPLICATE, NAME_RANGE, NATURAL_NUMBER, NOT_A_NUMBER } = ERROR;

class Validation {
  static isDuplicate(carList) {
    // 리스트를 집합으로 변경했을 때 길이의 변화가 없는 경우 해당 리스트에 중복된 요소가 없음을 의미한다
    if (carList.length === new Set(carList).size) {
      return;
    }
    throw new Error(DUPLICATE);
  }

  static isRange(carName) {
    if (1 <= carName.length && carName.length <= 4) {
      throw new Error(NAME_RANGE);
    }
    return;
  }

  static checkRange(carList) {
    carList.forEach((carName) => {
      Validation.isRange(carName);
    });
  }

  static isNaturalNumber(tryNumber) {
    if (Number.isFinite(tryNumber)) return ;
    throw new Error(NATURAL_NUMBER);
  }
}

export default Validation;
