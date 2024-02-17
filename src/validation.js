class Validation {
  static isDuplicate(carList) {
    if (carList.length !== new Set(carList).size) {
      return true;
    }
    return false;
  }

  static isInRange(carName, max, min) {
    if (carName.length > max || carName.length < min) {
      return true;
    }
    return false;
  }

  static isNaturalNumber(tryNumber) {
    if (tryNumber === "" || isNaN(tryNumber)) {
      throw new Error(NOT_A_NUMBER);
    }
    if (Number(tryNumber) <= 0) {
      throw new Error(NATURAL_NUMBER);
    }
    if (tryNumber.includes(".")) {
      throw new Error(NATURAL_NUMBER);
    }
    return true;
  }
}

export default Validation;
