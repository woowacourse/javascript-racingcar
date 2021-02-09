import Car from "./Car.js";
import {
  showElement,
  resetView,
  setResultView,
  setWinnerView,
} from "./display-utils.js";
import { playGame, getWinner } from "./game-utils.js";
import {
  isCarNameEmpty,
  isCarNameLengthValid,
  isTryNumInvalid,
  isTryNumNotNumber,
} from "./validate-input.js";

// section마다 고유한 id가 없어서, 각 section에 쉽게 접근하기 위해 sections Array 생성
export const sections = document.getElementsByTagName("section");
// 자동차 인스턴스 배열을 저장하는 state
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

const onClickedCarNamesBtn = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];

  carNamesBtn.addEventListener("click", () => {
    const carNamesInput = document.getElementsByTagName("input")[0];
    const carNames = carNamesInput.value.split(",").map((carName) => {
      return carName.trim();
    });

    if (isCarNameEmpty(carNames) || isCarNameLengthValid(carNames)) {
      return;
    }

    getCarInstance(carNames);
    showElement(sections[2]);
    carNamesBtn.disabled = true;
  });
};

const onClickedTryNumBtn = () => {
  const tryNumBtn = document.getElementsByTagName("button")[1];
  tryNumBtn.addEventListener("click", () => {
    const tryNum = document.getElementsByTagName("input")[1].value;

    if (isTryNumInvalid(tryNum) || isTryNumNotNumber(tryNum)) {
      return;
    }
    playGame();
    // game이 잘 진행되었다면 game결과를 보여준다.
    setResultView();
    setWinnerView(getWinner());
    showElement(sections[3]);
    showElement(sections[4]);
    tryNumBtn.disabled = true;
  });
};

const init = () => {
  resetView([2, 3, 4]);
  onClickedCarNamesBtn();
  onClickedTryNumBtn();
};

init();
