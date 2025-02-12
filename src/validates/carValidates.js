export function checkIsEmpty(input) {
  if (input.trim().length === 0) throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
}

export function checkCarNameLength(carNames) {
  carNames.forEach((carName) => {
    if (carName.length < 1 || carName.length > 5) throw new Error('[ERROR] 자동차 이름은 1에서 5자 사이여야 합니다.');
  });
}

export function checkCarNameDuplicate(carNames) {
  const carNameSet = new Set(carNames);

  if (carNameSet.size !== carNames.length) throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다.');
}

export function checkCarCount(carNames) {
  if (carNames.length < 2) throw new Error('[ERROR] 자동차는 두 대 이상이여야 합니다.');
}
