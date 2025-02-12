const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = {
  // 자동차
  carNameLengthOverFive: `${ERROR_PREFIX} 자동차 이름은 5글자 이하이어야 합니다.`,
  carCountUnderTwo: `${ERROR_PREFIX} 자동차 갯수는 2개 이상이어야 합니다.`,
  carCountOverHundred: `${ERROR_PREFIX} 자동차 갯수는 100개 이하이어야 합니다.`,
  duplicateCarName: `${ERROR_PREFIX} 중복된 자동차 이름은 입력할 수 없습니다.`,

  // 시도 횟수
  tryNumberUnderOne: `${ERROR_PREFIX} 시도 횟수는 1회 이상이어야 합니다.`,
  tryNumberOverHundred: `${ERROR_PREFIX} 시도 횟수는 100회 이하이어야 합니다.`,
  tryNumberNotPositiveInteger: `${ERROR_PREFIX} 시도 횟수는 양의 정수여야 합니다.`,
};
