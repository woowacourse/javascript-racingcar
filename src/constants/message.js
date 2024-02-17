import { DELIMITER } from './rule.js';

const HINT = Object.freeze('[hint]');

export const FORM_MESSAGE = Object.freeze({
  name: `${HINT}자동차 이름은 영문자,한글을 사용해 1자 이상 5자 이하로 해주세요.`,
  delimiter: `${HINT}자동차 이름은 쉼표(,)를 기준으로 구분해주세요.`,
  round: `${HINT}진행 횟수는 1이상 5이하의 정수만 가능해요.`,
});

export const INPUT_MESSAGE = Object.freeze({
  name: `경주할 자동차 이름을 입력하세요.\n${FORM_MESSAGE.name}\n${FORM_MESSAGE.delimiter}`,
  round: `시도할 횟수는 몇 회인가요?\n${FORM_MESSAGE.round}`,
});

export const OUTPUT_MESSAGE = Object.freeze({
  roundResult: '실행 결과',
  winner: '최종 우승자',
});

const COMMON_ERROR_MESSAGE = Object.freeze(
  '\n[Error] 유효하지 않은 형식이에요.',
);

export const ERROR_MESSAGE = Object.freeze({
  carName: `${COMMON_ERROR_MESSAGE} (자동차 이름 오류)`,
  duplicate: `${COMMON_ERROR_MESSAGE} (자동차 이름 중복 오류)`,
  delimiter: `${COMMON_ERROR_MESSAGE} (자동차를 ${DELIMITER}로 구분하지 않은 오류)`,
  numberOfCars: `${COMMON_ERROR_MESSAGE} (참여하는 자동차 개수  오류)`,
  round: `${COMMON_ERROR_MESSAGE} (게임 진행 횟수 오류)`,
});
