import { EMPTY_STRING } from './constants.js';

const SELECTOR = Object.freeze({
  // 범용 선택자
  APP: '#app',
  PROGRESS: '.progress',
  PROGRESS_INNER: '.round',

  // RacingGame 사용 선택자
  CAR_NAME_INPUT: '#car-name-input',
  CAR_NAME_BUTTON: '#car-name-button',
  RACE_TIME_INPUT: '#race-time-input',
  RACE_TIME_BUTTON: '#race-time-button',
  RACE_CONTAINER: '#racing-car-container',
  RACE_CAR_STATE: '.racing-car',
  RACE_CAR_NAME_BOX: '.car-name-box',
  RACE_ADVANCE: '.car-advance',
  RESULT_CONTAINER: '#result-container',
  WINNERS: '#winners',
  RETRY_BUTTON: '#retry-button',
});

function replaceSelectorToDomID(origin) {
  const output = {};
  Object.entries(origin).forEach(([key, value]) => {
    output[key] = value.replace(/#|\./g, EMPTY_STRING);
  });

  return output;
}

const DOM_ID = Object.freeze(replaceSelectorToDomID(SELECTOR));
export { SELECTOR, DOM_ID };
