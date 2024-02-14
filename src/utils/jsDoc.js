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
 * @property {CommonValidationType} invalidCarNameLength - 자동차 이름 수가 올바른지 검사하기 위한 객체
 * @property {CommonValidationType} invalidCarLength - 자동차 대 수가 올바른지 검사하기 위한 객체
 */

export {};
