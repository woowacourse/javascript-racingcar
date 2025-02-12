class NameValidator {
  static isNotEmpty(parsedCarName) {
    if (parsedCarName === '') {
      throw new Error('[ERROR] 빈 값은 입력할 수 없습니다. 다시 입력해주세요.');
    }
  }

  static isMoreThanTwo(parsedCarName) {
    if (parsedCarName.length < 2) {
      throw new Error(
        '[ERROR] 자동차는 2대 이상 입력해야 합니다. 다시 입력해주세요.',
      );
    }
  }

  static isBelowFive(carName) {
    if (carName.length > 5) {
      throw new Error(
        '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다. 다시 입력해주세요.',
      );
    }
  }

  static isNotDuplicated(parsedCarName) {
    const nameSet = new Set(parsedCarName);
    if (nameSet.size !== parsedCarName.length) {
      throw new Error(
        '[ERROR] 자동차 이름은 중복해서 입력할 수 없습니다. 다시 입력해주세요.',
      );
    }
  }

  static isValid(parsedCarName) {
    this.isNotEmpty(parsedCarName);
    this.isMoreThanTwo(parsedCarName);
    this.isNotDuplicated(parsedCarName);

    parsedCarName.forEach((carName) => this.isBelowFive(carName));
  }
}

export default NameValidator;
