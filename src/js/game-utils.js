import { state } from "./index.js";
import {
  resetView,
  resetCarNamesInput,
  resetTryNumInput,
} from "./display-utils.js";
import { carNamesSection, tryNumSection, winnerSection } from "./elements.js";

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
  const tryNumInput = tryNumSection.querySelector("input");
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });

  for (let i = 0; i < tryNumInput.value; i++) {
    setTotalStep();
  }
};
// 우승자 이름을 배열로 리턴한다.
export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => {
    if (car.totalStep === maxTotalStep) {
      return car;
    }
  });
  const winnerNames = winners.map((winner) => {
    return winner.name;
  });

  return winnerNames;
};

export const resetGame = () => {
  const carNamesBtn = carNamesSection.querySelector("button");
  const tryNumBtn = tryNumSection.querySelector("button");
  const resetBtn = winnerSection.querySelector("button");

  resetBtn.addEventListener("click", () => {
    resetView();
    state.cars = [];

    resetCarNamesInput();
    resetTryNumInput();
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};
