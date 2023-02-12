const GAME_NUMBER = Object.freeze({
  minAttempt: 1,
  maxAttempt: 20,
  minCarCount: 2,
  maxCarCount: 20,
  minCarNameLength: 2,
  maxCarNameLength: 5,
  moveStandard: 4,
  moveRange: 9,
});

const ERROR_SUBJECT = '[ERROR] ';

const GAME_STRING = Object.freeze({
  progress: '-',
  nameSplit: ',',
  winnersJoin: ', ',
  progressJoin: '',
  space: '\n',
  empty: '',
  alphabetExpression: /[^a-zA-Z]/,
  numberExpression: /^[0-9]+$/,
});

const GAME_MESSAGE = Object.freeze({
  askCarName:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  askAttempts: '시도할 회수는 몇회인가요?\n',
  progressResult: '\n실행 결과',
  getWinners: (names) => `${names}가 최종 우승했습니다.`,
});

const ERROR_MESSAGE = Object.freeze({
  onlyAlphabet: `${ERROR_SUBJECT}영문자만 입력해주세요`,
  attemptRange: `${ERROR_SUBJECT}시도 횟수는 ${GAME_NUMBER.minAttempt}번 이상 ${GAME_NUMBER.maxAttempt}번 이하만 가능합니다.`,
  onlyInt: `${ERROR_SUBJECT}자연수만 입력해주세요`,
  carCountRange: `${ERROR_SUBJECT}자동차 개수는 ${GAME_NUMBER.minCarCount}개 이상 ${GAME_NUMBER.maxCarCount}개 이하만 가능합니다`,
  carNameLengthRange: `${ERROR_SUBJECT}자동차 이름 길이는 ${GAME_NUMBER.minCarNameLength}글자 이상 ${GAME_NUMBER.maxCarNameLength}글자 이하만 가능합니다`,
  duplicatedCarName: `${ERROR_SUBJECT}자동차 이름 중 중복된 이름이 있습니다.`,
});

module.exports = {
  ERROR_MESSAGE,
  ERROR_SUBJECT,
  GAME_MESSAGE,
  GAME_NUMBER,
  GAME_STRING,
};
