class CarNameValidator {
  valiateNames(carNames) {
    for (let carName of carNames) {
      this.#valiateCarNameLength(carName);
      this.#validateSpecialSymbol(carName);
    }

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #valiateCarNameLength(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error("자동차 이름은 1이상 5이하여야 합니다.");
    }
  }

  #validateDuplicateName(carNames) {
    const nameSet = new Set();

    for (let carName of carNames) {
      this.#checkDuplicate(carName, nameSet);
    }
  }

  #checkDuplicate(carName, nameSet) {
    if (nameSet.has(carName)) {
      throw new Error("자동차 이름은 중복될 수 없습니다.");
    }

    nameSet.add(carName);
  }

  #validateSpecialSymbol(carNames) {
    const specialSymbolRegExp =
      /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]$/g;

    if (specialSymbolRegExp.test(carNames)) {
      throw new Error("자동차 이름은 특수기호 만으로 구성될 수 없습니다.");
    }
  }

  #validateCarNamesLength(carNames) {
    if (carNames.length === 1 || carNames.length === 101) {
      throw new Error("자동차 수는 1이상 100이하여야 합니다.");
    }
  }
}

export default CarNameValidator;
