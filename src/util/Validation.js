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
    if (Number.isInteger(Number(tryNumber)) && Number(tryNumber) > 0) {
      return true;
    }
    return false;
  }
}

export default Validation;
