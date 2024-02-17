import { CAR_RULE, DELIMITER, ROUND_RULE } from './rule.js';

const HINT = Object.freeze('[hint]');

const ARROW = Object.freeze('=>');

const GREETING = Object.freeze('\n--- 🚗🏁 자동차 경주를 시작합니다. ---\n');

export const SPACE = ' ';

export const NONE = '없음';

export const FORM_MESSAGE = Object.freeze({
  name: `${HINT}자동차 이름은 영문자,한글을 사용해 ${CAR_RULE.numberOfName.min}자 이상 ${CAR_RULE.numberOfName.min}자 이하로 해주세요.`,
  delimiter: `${HINT}자동차 이름은 쉼표(${DELIMITER})를 기준으로 구분해주세요.`,
  round: `${HINT}진행 횟수는 ${ROUND_RULE.min}이상 ${ROUND_RULE.max}이하의 정수만 가능해요.`,
});

export const INPUT_MESSAGE = Object.freeze({
  name: `${GREETING}\n경주할 자동차 이름을 입력하세요.\n${FORM_MESSAGE.name}\n${FORM_MESSAGE.delimiter}`,
  round: `시도할 횟수는 몇 회인가요?\n${FORM_MESSAGE.round}`,
});

export const OUTPUT_MESSAGE = Object.freeze({
  roundResult: '--- 실행 결과 ---',
  winner: '최종 우승자',
  totalRound: `${ARROW} 게임을 진행할 라운드 횟수:${SPACE}`,
  participantList: `${ARROW} 참가 자동차:${SPACE}`,
  movement: '-',
});

const COMMON_ERROR_MESSAGE = Object.freeze(
  '\n[Error] 유효하지 않은 형식이에요.',
);

export const ERROR_MESSAGE = Object.freeze({
  carName: `${COMMON_ERROR_MESSAGE} (자동차 이름 형식 또는 ${DELIMITER} 사용 오류)`,
  duplicate: `${COMMON_ERROR_MESSAGE} (자동차 이름 중복 오류)`,
  numberOfCars: `${COMMON_ERROR_MESSAGE} (참여하는 자동차 개수 오류)`,
  round: `${COMMON_ERROR_MESSAGE} (게임 진행 횟수 오류)`,
});
