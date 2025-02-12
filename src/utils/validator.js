export const validator = Object.freeze({
  carNames(carNames) {
    if (carNames.length !== new Set(carNames).size)
      throw new Error('중복된 이름이 존재합니다.');
    if (carNames.some((name) => name.length > 5))
      throw new Error('이름은 5자 이하여야 합니다.');
    if (carNames.some((name) => name.includes(' ')))
      throw new Error('공백이 포함된 이름이 존재합니다.');
    if (carNames.some((name) => !/^[a-zA-Z]+$/.test(name)))
      throw new Error('알파벳으로 구성되어야 합니다.');
    if (carNames.length < 2) throw new Error('두 대 이상이어야 합니다.');
  },
});
