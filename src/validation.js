const MAX_NAME_LENGTH = 5;
const MIN_GAME_COUNT = 0;
const MAX_GAME_COUNT = 100;

export const validationInputLength = (input) => {
  if (input.length > MAX_NAME_LENGTH) {
    throw new Error(
      `[Error] 자동차 이름은 ${MAX_NAME_LENGTH}자 초과 안됩니다.`
    );
  }
};

export const validationCarNameForm = (input) => {
  const commaCount = input.split("").filter((value) => value === ",").length;
  const carCount = input.split(",").filter(Boolean).length;
  if (input.trim() === "" || commaCount !== carCount - 1) {
    throw new Error("[Error] 자동차 이름이 올바르지 않습니다.");
  }
};

export const validationDuplicatedCarName = (input) => {
  const target = Array.from(Set(input.split(",")));
  const origin = input.split(",");
  if (target.length !== origin.length) {
    throw new Error("[Error] 중복된 자동차 이름은 안됩니다.");
  }
};

export const validationGameCountType = (input) => {
  const isInteger = Number.isInteger(Number(input));
  if (isInteger === false) {
    throw new Error("[Error] 시도 횟수는 소수,문자열,NaN,Infinity 안됩니다.");
  }
};

export const validationGameCountRange = (input) => {
  const gameCount = Number(input);
  if (gameCount <= MIN_GAME_COUNT || gameCount >= MAX_GAME_COUNT) {
    throw new Error("[Error] 시도 횟수는 0이하, 100이상 안됩니다.");
  }
};
