import deepFreeze from "../../utils/deepFeeze.js";

const ERROR_MESSAGE = deepFreeze({
  HAVE_DUPLICATION: "중복된 이름이 존재합니다.",
  NOT_NUMBER: "숫자를 입력해주세요.",
  NOT_STRING: "문자열을 입력해주세요.",
  NOT_NATURAL_NUMBER: "자연수를 입력해주세요.",
  OVER_LIMIT_COUNT: "최대 시도 횟수는 20회입니다.",
  HAVE_SPECIAL_CHARACTERS: "특수문자는 입력할 수 없습니다.",
  OUT_OF_RANGE: "0~5자 사이의 이름을 입력해주세요.",
});
export default ERROR_MESSAGE;
