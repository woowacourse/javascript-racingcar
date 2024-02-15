// - [ ] 이동 횟수가 0 이하일 경우 예외 처리한다.
// - [ ] 이동 횟수가 자연수가 아닌 경우 예외 처리한다.
const Validator = {
  validateCarNameList(carNameList) {
    if (carNameList.length <= 1) {
      throw new Error('[ERROR] 자동차 목록은 2대 이상 입력해주세요.');
    }

    carNameList.forEach((carName) => {
      if (carName.length === 0 || carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }
    });
  },

  validateTurnCount(turnCountInput) {
    const turnCount = parseFloat(turnCountInput, 10);
    if (!Number.isInteger(turnCount)) {
      throw new Error('[ERROR] 시도할 횟수는 실수로 입력할 수 없습니다. 다시 입력해주세요.');
    }
    if (Number.isNaN(turnCount)) {
      throw new Error('[ERROR] 시도할 횟수는 숫자로만 입력해주세요.');
    }
    if (turnCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 1 이상의 자연수로만 입력해주세요.');
    }
  },
};

export default Validator;
