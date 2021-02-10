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

  isCountValid(count) {
    if (isNaN(count)) {
      return alert("시도 횟수는 자연수여야 합니다.");
    }

    if (parseInt(count, 10) <= 0) {
      return alert("시도 횟수는 0보다 작거나 같을 수 없습니다.");
    }

    if (parseInt(count, 10) % 1 !== 0) {
      return alert("시도 횟수는 소수가 될 수 없습니다.");
    }

    return true;
  }
}

export const { isCarValid, isCountValid } = new Valid();
