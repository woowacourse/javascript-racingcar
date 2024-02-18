import { SYMBOLS } from './constants';

export const INPUT_MESSAGES = Object.freeze({
  carsName: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${SYMBOLS.nameSeperator})를 기준으로 구분).`,
  attemptNum: `시도할 횟수는 몇 회인가요?`,
});
export const OUTPUT_MESSAGES = Object.freeze({
  resultGuide: `실행 결과`,

  nameAndCarPosition: ([name, position]) => {
    return `${name} : ${SYMBOLS.move.repeat(position)}`;
  },

  gameResult: winners => {
    return `최종 우승자: ${winners}`;
  },
});

const PREFIX_ERROR = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  invalidAttemptNum: `${PREFIX_ERROR} 0 이상의 정수를 입력해 주세요.`,
  hasRedundantCarName: `${PREFIX_ERROR} 중복된 자동차 이름이 있습니다.`,
  invalidCarName: `${PREFIX_ERROR} 자동차 이름 입력이 올바르지 않습니다`,
  hasSingleCar: `${PREFIX_ERROR} 두 대 이상의 자동차를 입력해 주세요.`,
});
