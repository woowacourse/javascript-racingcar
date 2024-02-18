import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from "../model/Car.js";
import { MAX_TRY_COUNT, MIN_TRY_COUNT } from "../model/TryCount.js";

const ERROR_MESSAGE = Object.freeze({
  retry: "다시 입력해주세요.",
  nameEmpty: "이름은 필수입니다.",
  nameLength: `이름은 ${MIN_NAME_LENGTH} ~ ${MAX_NAME_LENGTH}자 사이만 가능합니다.`,
  duplicated: "중복된 이름이 존재합니다.",
  tryCountEmpty: "시도할 횟수는 필수입니다.",
  isNan: "유효한 숫자가 아닙니다.",
  tryCountRange: `시도할 횟수는 ${MIN_TRY_COUNT} ~ ${MAX_TRY_COUNT}자 사이만 가능합니다.`,
});

export default ERROR_MESSAGE;
