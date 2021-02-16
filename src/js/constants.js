export const ALERT_MESSAGES = {
  CAR_NAME_EMPTY: '자동차 이름을 입력해주세요.',
  CAR_NAME_OVER_FIVE: '자동차 이름을 5자 이하로 입력해 주세요.',
  TRY_COUNT_EMPTY: '시도 횟수를 입력해주세요.',
  TRY_COUNT_NEG: '양수를 입력해주세요.',
  TRY_COUNT_NOT_INT: '정수를 입력해주세요.',
};

export const CLASS_NAMES = {
  CAR_NAME: '.car-name',
  CAR_NAME_BTN: '.car-name-btn',
  TRY_COUNT_FORM: '.try-count-form',
  TRY_COUNT: '.try-count',
  TRY_COUNT_BTN: '.try-count-btn',
  PROGRESS_CONTAINER: '.progress-container',
  PROGRESS_CARS: '.progress-cars',
  RESULT_CONTAINER: '.result-container',
  RESTART_BTN: '.restart-btn',
  SPINNER_CONTAINER: '.spinner-container',
  FORWARD_ICON: '.forward-icon'
};

export const DELAY = {
  SPINNER_SEC: 1000,
  ARROW_DISPLAYING_SEC: 1000,
  get TURN_TIME() {
    return this.SPINNER_SEC + this.ARROW_DISPLAYING_SEC;
  },
  WAIT_ALERT_SEC: 2000,
}
