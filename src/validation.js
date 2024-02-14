class Validation {
  static isDuplicate(carList) {
    if (carList.length == new Set(carList).size) {
      return true;
    }
    throw new Error("중복된 차가 있습니다.");
  }

  static isRange(carName) {
    if (carName.length > 5) {
      throw new Error("자동차 이름이 5글자 이상입니다");
    }
    return true;
  }

  static isNaturalNumber(tryNumber) {
    // 입력이 비어 있거나 숫자가 아닌 경우 false 반환
    if (tryNumber === "" || isNaN(tryNumber)) {
      return false;
    }
    // 입력이 0 또는 음수인 경우 false 반환
    if (Number(tryNumber) <= 0) {
      return false;
    }
    // 소수점이 포함된 경우 false 반환
    if (tryNumber.includes(".")) {
      return false;
    }
    // 입력이 자연수인 경우 true 반환
    return true;
  }
}

export default Validation;
