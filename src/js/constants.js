const SELECTOR = {
  TITLE: {
    CONTAINER: ".title-container",
  },

  CAR_NAME: {
    CONTAINER: ".car-name-input-container",
    INPUT: ".car-name-input-container__input",
    BUTTON: ".car-name-input-container__button",
  },

  LAP: {
    CONTAINER: ".lap-input-container",
    INPUT: ".lap-input-container__input",
    BUTTON: ".lap-input-container__button",
  },

  GAME_PROGRESS: {
    CONTAINER: ".game-progress-container",
  },

  GAME_RESULT: {
    CONTAINER: ".game-result-container",
  },
};

const MESSAGE = {
  CAR_NAME: {
    MIN_NUMBER: "두 개 이상의 자동차 이름을 입력해주세요.",
    MAX_LENGTH: "자동차 이름은 5자 이하로 지어주세요.",
  },
};

export { SELECTOR, MESSAGE };
