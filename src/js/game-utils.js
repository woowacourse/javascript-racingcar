import { state } from "./index.js";
import {
  resetView,
  resetCarNamesInput,
  resetTryNumInput,
  resetGameResultSections,
  setWinnerView,
  getWinnerText,
  initResultView,
  hideSpinner,
  showSpinner,
  showStep,
} from "./display-utils.js";
import {
  carNamesSection,
  tryNumSection,
  resultSection,
  winnerSection,
} from "./elements.js";

const GO_NUMBER = 3;

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const setStep = () => {
  // 앞으로 전진하는 car객체의 index 반환
  let movingCarIndexs = [];

  state.cars.forEach((car, idx) => {
    const randomNum = getRandomNum();
    if (randomNum > GO_NUMBER) {
      car.go();
      movingCarIndexs.push(idx);
    }
  });

  return movingCarIndexs;
};

const startGame = () => {
  initResultView();
};

const finishGame = (resultDivs, goStep) => {
  const winnerArray = getWinner();
  const winnerText = getWinnerText(winnerArray);

  hideSpinner(resultDivs);

  setWinnerView(winnerArray);
  setTimeout(() => alert(`축하합니다. ${winnerText} 우승했습니다.`), 2000);
  clearInterval(goStep);
};

const playGame = (resultDivs) => {
  const movingCarIndexs = setStep();

  hideSpinner(resultDivs);
  showStep(resultDivs, movingCarIndexs);
  showSpinner(resultDivs);
};

const playGameForSecond = () => {
  const tryNumInput = tryNumSection.querySelector("input");
  let second = 0;

  const goStep = setInterval(() => {
    const resultDivs = resultSection
      .querySelector("div")
      .querySelectorAll(".one-car-result");

    if (second === 0) {
      startGame(resultDivs);
    } else if (second === Number(tryNumInput.value) + 1) {
      finishGame(resultDivs, goStep);
    } else {
      playGame(resultDivs);
    }

    second++;
  }, 1000);
};

export const initGame = () => {
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });
  resetGameResultSections(); // reset result, winners section

  playGameForSecond();
};
// 우승자 이름을 배열로 리턴한다.
export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => {
    return car.totalStep === maxTotalStep;
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
