import GAME_SETTING from './RacingGame/setting.js';

const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_MULTIPLE_INPUT:
    '자동차 이름을 최소 2개 이상 입력해주세요.\n(자동차 이름은 콤마로 구분합니다.)',
  CAR_NAME_LENGTH_RANGE: `자동차 이름은 ${GAME_SETTING.CAR_NAME_LENGTH_MIN}자에서 ${GAME_SETTING.CAR_NAME_LENGTH_MAX}자까지 입력할 수 있습니다.`,
  CAR_NAME_UNIQUE: '자동차 이름은 중복으로 입력할 수 없습니다.',
  RACE_TIME_ONLY_NUMBER: '시도 횟수는 1 이상의 숫자만 입력할 수 있습니다.',
});

const RESULT_MESSAGE = Object.freeze({
  RACING_GAME_WINNERS: '레이싱 게임이 종료되었습니다 🎉\n우승자를 확인해주세요.',
});

export { ERROR_MESSAGE, RESULT_MESSAGE };
