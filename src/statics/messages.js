import { SYMBOLS } from './constants';

export const INPUT_MESSAGES = Object.freeze({
  carsName: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분). \n',
  attemptNum: '시도할 횟수는 몇 회인가요? \n',
});
export const OUTPUT_MESSAGES = Object.freeze({
  resultGuide: '\n실행 결과',

  nameAndCarPosition: ([name, position]) => {
    return `${name} : ${SYMBOLS.move.repeat(position)}`;
  },

  gameResult: winners => {
    return `최종 우승자: ${winners}`;
  },
});
export const ERROR_MESSAGES = Object.freeze({
  invalidAttemptNum: '[ERROR] 0 이상의 정수를 입력해 주세요.',
  redundantCarName: '[ERROR] 중복된 자동차 이름이 있습니다.',
  invalidCarName: '[ERROR] 자동차 이름 입력이 올바르지 않습니다',
});
