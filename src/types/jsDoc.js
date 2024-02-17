/**
 * @typedef {object} CommonValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(inputValue : string) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CommonValidationTypes
 * @property {CommonValidationType} emptyValues - 입력 값이 비어있는지를 검사하기 위한 객체
 * @property {CommonValidationType} existSpaces - 입력 값에 공백이 포함되어 있는지를 검사하기 위한 객체
 */

/**
 * @typedef {object} CarNameValidationTypes
 * @property {CommonValidationType} notCommaSeparated - 콤마로 구분했는지 확인하기 위한 객체
 * @property {CommonValidationType} duplicateCarNames - 중복된 자동차 이름이 있는지 확인하기 위한 객체
 * @property {CommonValidationType} invalidCarNameLength - 자동차 이름 수가 올바른지 검사하기 위한 객체
 * @property {CommonValidationType} invalidCarLength - 자동차 대 수가 올바른지 검사하기 위한 객체
 */

/**
 * @typedef {object} TryCountValidationTypes
 * @property {CommonValidationType} typeOfInteger - 들어온 값이 정수 인지 확인하기 위한 객체
 * @property {CommonValidationType} outOfRange - 주어진 범위에서 벗어나는 숫자인지 확인하기 위한 객체
 */

/**
 * @typedef {object} UserInputDetails
 * @property {string[]} racingCarNames - 입력 받은 자동차 이름들
 * @property {number} tryCount - 시도 횟수
 */

/**
 * @typedef {object} RacingCar
 * @property {string} carName - 자동차 이름
 * @property {number} moveCount - 이동 횟수
 */

/**
 * @typedef {RacingCar[]} RacingTurnResult
 */

/**
 * @typedef {RacingTurnResult[]} RacingResult
 */

export {};
