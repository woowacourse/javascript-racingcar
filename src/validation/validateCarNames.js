const validateCarNames = (input) => {
  const carNames = input.split(",").map((el) => el.trim());

  carNames.forEach((car) => {
    if (car === "") {
      throw new Error("[ERROR] 자동차 이름이 존재하지 않습니다.");
    }
    if (!value.test(/([a-zA-Zㄱ-ㅎ가-힣\S])+/)) {
      throw new Error("[ERROR] 자동차 이름의 형식이 올바르지 않습니다.");
    }
    if (car.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5글자가 넘습니다.");
    }
  });

  if (new Set(carNames).size !== carNames.length) {
    throw new Error("[ERROR] 자동차 이름이 중복됩니다.");
  }

  return carNames;
};

export default validateCarNames;
