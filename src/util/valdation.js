const validateCarNames = (carNames) => {
  const names = carNames.split(",");

  validateLength(names);
};

const validateRaceCount = (raceCountInput) => {
  const raceCount = Number(raceCountInput);

  validateNumber(raceCount);
  validateInteger(raceCount);
  validateRange(raceCount);
};

const validateLength = (names) => {
  if (names.length < 2) {
    throw new Error(
      "자동차는 최소 2대 이상 필요합니다. 쉼표(,)를 기준으로 구분해주세요."
    );
  }

  names.forEach((name) => {
    if (name.length < 1 || name.length > 5) {
      throw new Error("이름은 1자 이상 5자 이하만 가능합니다.");
    }
  });
};

const validateRange = (raceCount) => {
  if (raceCount < 1) {
    throw new Error("횟수는 1이상 필요합니다.");
  }
};

const validateNumber = (raceCount) => {
  if (isNaN(raceCount)) {
    throw new Error("횟수는 숫자여야 합니다.");
  }
};

const validateInteger = (raceCount) => {
  if (!Number.isInteger(raceCount)) {
    throw new Error("횟수는 정수여야 합니다.");
  }
};

export { validateCarNames, validateRaceCount };
