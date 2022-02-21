const SELECTOR = Object.freeze({
  // 범용 선택자
  APP: '#app',
  PROGRESS_CONTAINER: '.progress-container',
  PROGRESS: '.progress',

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

const replaceSelectorToDomName = (origin) => {
  const output = { ID: {}, CLASS: {} };
  Object.entries(origin).forEach(([key, value]) => {
    const name = value.substr(1);

    if (value.substr(0, 1) === '#') output.ID[key] = name;
    else if (value.substr(0, 1) === '.') output.CLASS[key] = name;
  });

  return output;
};

const DOM_NAME = Object.freeze(replaceSelectorToDomName(SELECTOR));
export { SELECTOR, DOM_NAME };
