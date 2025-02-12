export function checkCarNameLength(carNames) {
  carNames.forEach((carName) => {
    if (carName.length < 1 || carName.length > 5) throw new Error('[ERROR] 자동차 이름은 1에서 5자 사이여야 합니다.');
  });
}

export function checkCarNameDuplicate(carNames) {
  const carNameSet = new Set(carNames);

  if (carNameSet.size !== carNames.length) throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다.');
}
