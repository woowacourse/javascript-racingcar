import {
  state,
  countSection,
  carPlayerSection,
  resultSection,
} from "./index.js";
import {
  resetView,
  resetCarNamesInput,
  resetTryNumInput,
} from "./display-utils.js";

const GO_NUMBER = 3;

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const setTotalStep = () => {
  state.cars.forEach((car) => {
    const randomNum = getRandomNum();
    if (randomNum > GO_NUMBER) {
      car.go();
    }
  });
};

export const playGame = () => {
  const tryNumInput = countSection.element.getElementsByTagName("input")[0];
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });

  for (let i = 0; i < tryNumInput.value; i++) {
    setTotalStep();
  }
};

export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => car.totalStep === maxTotalStep);

  return winners.map((car) => car.name);
};

export const resetGame = () => {
  const [carNamesBtn, tryNumBtn, resetBtn] = document.getElementsByTagName(
    "button"
  );

  resetBtn.addEventListener("click", () => {
    resetView([countSection, carPlayerSection, resultSection]);
    state.cars = [];

    resetCarNamesInput();
    resetTryNumInput();
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};
