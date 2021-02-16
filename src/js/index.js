import Car from "./Car.js";
import Section from "./Section.js";
import { hideView, setWinnerView, resetCarNamesInput, resetTryNumInput } from "./display-utils.js";
import { playGame, getWinner } from "./game-utils.js";
import { isCarNameEmpty, isInvalidCarNameLength, isTryNumInvalid, isTryNumNotNumber } from "./validate-input.js";

export const [gameTitleSection, carNameSection, countSection, carPlayerSection, resultSection] = Array.from(
  document.getElementsByTagName("section")
).map((it) => new Section(it));

export const state = {
  cars: [],
};

export const parseHTML = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

const initCars = (carNames) => {
  state.cars = carNames.map((carName) => {
    return new Car(carName);
  });
};

const addEventOnCarNamesButton = () => {
  const carNamesButton = document.querySelector("#car-name-input > div > button");

  carNamesButton.addEventListener("click", () => {
    const carNamesInput = document.querySelector("#car-name-input > div > input");
    const carNames = carNamesInput.value.split(",").map((carName) => {
      return carName.trim();
    });

    if (isCarNameEmpty(carNames) || isInvalidCarNameLength(carNames)) {
      alert("올바른 자동차 이름을 입력하세요.");
      resetCarNamesInput();
      return;
    }

    initCars(carNames);
    countSection.show();
    carNamesButton.disabled = true;
  });
};

const alertCelebration = () => {
  alert("축하합니다! 게임이 모두 끝났습니다!");
};

const addEventOnTryNumButton = () => {
  const tryNumBtn = document.querySelector("#try-input > div > button");

  tryNumBtn.addEventListener("click", () => {
    startGame();
  });
};

const startGame = () => {
  carPlayerSection.show();
  resultSection.show();

  const tryNum = document.querySelector("#try-input > div > input").value;
  const tryNumBtn = document.querySelector("#try-input > div > button");

  if (isTryNumInvalid(tryNum) || isTryNumNotNumber(tryNum)) {
    alert("올바른 시도 횟수를 입력하세요.");
    resetTryNumInput();
    return;
  }
  tryNumBtn.disabled = true;
  playGame(tryNum).then(function () {
    const spinnerList = document.getElementsByClassName("loading");
    Array.from(spinnerList).forEach((spinner) => spinner.remove());
    setWinnerView(getWinner());
    setTimeout(alertCelebration, 2000);
  });
};

const initRacingCarGame = () => {
  hideView([countSection, carPlayerSection, resultSection]);
  addEventOnCarNamesButton();
  addEventOnTryNumButton();
};

initRacingCarGame();
