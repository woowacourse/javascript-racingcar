class Valid {
  isCarValid(carNames) {
    if (carNames.find(carName => carName.length > 5)) {
      return alert("자동차 이름의 길이는 최대 5글자 입니다.");
    }
    if (carNames.find(carName => carName.length === 0)) {
      return alert("자동차 이름은 공백이 될 수 없습니다.");
    }
    if (carNames.length !== new Set(carNames).size) {
      return alert("자동차 이름은 중복이 될 수 없습니다.");
    }

    return true;
  }

  isCountValid() {}
}
