const ErrorMessage = Object.freeze({
  isEmpty: '[ERROR] 빈 값은 입력할 수 없습니다. 다시 입력해주세요.',
  isLessThanTwo:
    '[ERROR] 자동차는 2대 이상 입력해야 합니다. 다시 입력해주세요.',
  isLongerThanFive:
    '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다. 다시 입력해주세요.',
  isDuplicated:
    '[ERROR] 자동차 이름은 중복해서 입력할 수 없습니다. 다시 입력해주세요.',
});

export default ErrorMessage;
