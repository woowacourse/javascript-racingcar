const ERROR = Object.freeze({
  attemptRange: "[ERROR] 시도 횟수는 1부터 1000 이하의 수여야 합니다.",
  attemptType: "[ERROR] 시도 횟수는 숫자 형식만 입력할 수 있습니다.",
  carNameLength: "[ERROR] 자동차 이름은 1자 이상, 5자 이하여야 합니다.",
  carNameType: "[ERROR] 자동차 이름은 한글과 영문만 입력 가능합니다.",
  carNameRange:
    "[ERROR] 자동차 이름은 1개 이상, 50개 이하까지 입력할 수 있습니다.",
  carNameDuplicated: "[ERROR] 자동차 이름은 중복될 수 없습니다.",
});

export default ERROR;
