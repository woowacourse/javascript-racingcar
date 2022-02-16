export const MAX_CAR_NAME_LENGTH = 5;
export const MIN_COUNT = 1;

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '1글자 이상의 자동차 이름을 입력해주세요.',
  LONG_LENGTH: `각 자동차의 이름을 ${MAX_CAR_NAME_LENGTH}자 이하로 입력해주세요.`,
  UNDER_MIN_NUMBER: `${MIN_COUNT} 이상의 수를 입력해주세요.`,
  DECIMAL: '자연수를 입력해주세요.',
  DUPLICATE_NAME: '이름을 중복되지 않게 입력해주세요.',
});

export const WINNER_MESSAGE = (winnerList) => {
  return `${winnerList.join(`${WINNER_SEPARATOR} `)} 우승을 축하합니다.`;
};

export const CAR_NAME_SEPARATOR = ',';

export const WINNER_SEPARATOR = ',';

export const NUMBER_FOR_MOVE = Object.freeze({
  MIN_NUMBER: 0,
  MAX_NUMBER: 9,
  MOVE_CRITERIA: 4,
});

export const SELECTOR = Object.freeze({
  INPUT_SECTION_NAME_INPUT: 'input-section__name-input',
  INPUT_SECTION_COUNT_INPUT: 'input-section__count-input',
  INPUT_SECTION_NAME_BUTTON: 'input-section__name-button',
  INPUT_SECTION_COUNT_BUTTON: 'input-section__count-button',
  COUNT_SECTION: 'count-section',
  COUNT_SECTION_DISPLAY_NONE: 'count-section-display-none',
  RESULT_SECTION: 'result-section',
  RESULT_SECTION_DISPLAY_NONE: 'result-section-display-none',
  STEP_SECTIONS: 'step-sections',
  STEP_SECTION: 'step-section',
  STEP_SECTION_NAME: 'step-section__name',
  STEP_SECTION_ARROWS: 'step-section__arrows',
  STEP_SECTION_ARROW: 'step-section__arrow',
  STEP_SECTION_LOADING: 'step-section__loading',
  WINNER: 'winner',
  RESET_BUTTON: 'reset-button',
});

export const ROUND_DELAY = 1000;

export const WIN_ALERT_DELAY = 2000;

export const STEP_SIGN = {
  GO: 1,
  STOP: 0,
};
