const ErrorMessage = Object.freeze({
  emptyInput: '[ERROR] 빈 값은 입력할 수 없습니다. 다시 입력해주세요.',
  lessThanTwo: '[ERROR] 자동차는 2대 이상 입력해야 합니다. 다시 입력해주세요.',
  longerThanFive:
    '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다. 다시 입력해주세요.',
  duplicatedName:
    '[ERROR] 자동차 이름은 중복해서 입력할 수 없습니다. 다시 입력해주세요.',
  NaNTryCount: '[ERROR] 시도 횟수는 숫자만 가능합니다. 다시 입력해주세요.',
  invalidRangeTryCount:
    '[ERROR] 시도 횟수는 0 이거나 음수일 수 없습니다. 다시 입력해주세요.',
  notInteger: '[ERROR] 시도 횟수는 정수여야 합니다. 다시 입력해주세요.',
  exceedTryCount:
    '[ERROR] 시도 횟수는 백 만 번을 초과할 수 없습니다. 다시 입력해주세요.',
});

export default ErrorMessage;
