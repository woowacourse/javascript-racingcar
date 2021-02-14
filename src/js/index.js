import Car from "./Car.js";
import Section from "./Section.js";
import {
  resetView,
  setResultView,
  setWinnerView,
  resetCarNamesInput,
  resetTryNumInput,
} from "./display-utils.js";
import { playGame, getWinner } from "./game-utils.js";
import {
  isCarNameEmpty,
  isInvalidCarNameLength,
  isTryNumInvalid,
  isTryNumNotNumber,
} from "./validate-input.js";

export const [
  gameTitleSection,
  carNameSection,
  countSection,
  carPlayerSection,
  resultSection,
] = Array.from(document.getElementsByTagName("section")).map(
  (it) => new Section(it)
);

export const state = {
  cars: [],
};

export const parseHTML = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

const getCarInstance = (carNames) => {
  state.cars = carNames.map((carName) => {
    return new Car(carName);
  });
};

const onClickedCarNamesButton = () => {
  const carNamesButton = carNameSection.element.getElementsByTagName(
    "button"
  )[0];

  carNamesButton.addEventListener("click", () => {
    const carNamesInput = carNameSection.element.getElementsByTagName(
      "input"
    )[0];
    const carNames = carNamesInput.value.split(",").map((carName) => {
      return carName.trim();
    });

    if (isCarNameEmpty(carNames) || isInvalidCarNameLength(carNames)) {
      alert("올바른 자동차 이름을 입력하세요.");
      resetCarNamesInput();
      return;
    }

    getCarInstance(carNames);
    countSection.show();
    carNamesButton.disabled = true;
  });
};

const onClickedTryNumButton = () => {
  const tryNumBtn = document.getElementsByTagName("button")[1];

  tryNumBtn.addEventListener("click", () => {
    const tryNum = document.getElementsByTagName("input")[1].value;
    if (isTryNumInvalid(tryNum) || isTryNumNotNumber(tryNum)) {
      alert("올바른 시도 횟수를 입력하세요.");
      resetTryNumInput();
      return;
    }
    playGame();

    setResultView();
    setWinnerView(getWinner());
    carPlayerSection.show();
    resultSection.show();
    tryNumBtn.disabled = true;
  });
};

const initRacingCarGame = () => {
  resetView([countSection, carPlayerSection, resultSection]);
  onClickedCarNamesButton();
  onClickedTryNumButton();
};

initRacingCarGame();
