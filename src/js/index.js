import Car from "./Car.js";
import {
  showElement,
  resetView,
  setResultView,
  setWinnerView,
  resetCarNamesInput,
  resetTryNumInput,
} from "./display-utils.js";
import { playGame, getWinner } from "./game-utils.js";
import {
  isInputEmpty,
  isCarNameLengthValid,
  isInputNegative,
  isInputString,
} from "./validate-input.js";
import {
  carNamesSection,
  tryNumSection,
  resultSection,
  winnerSection,
} from "./elements.js";

// 자동차 인스턴스 배열을 저장하는 state
export const state = {
  cars: [],
};

export const parseHTML = (html) => {
  const parser = new DOMParser();

  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

const createCarInstance = (carNames) => {
  state.cars = carNames.map((carName) => {
    return new Car(carName);
  });
};

const onClickedCarNamesBtn = () => {
  const carNamesBtn = carNamesSection.querySelector("button");

  carNamesBtn.addEventListener("click", () => {
    const carNamesInput = carNamesSection.querySelector("input");
    const carNames = carNamesInput.value.split(",").map((carName) => {
      return carName.trim();
    });

    if (isInputEmpty(carNames) || isCarNameLengthValid(carNames)) {
      alert("올바른 자동차 이름을 입력하세요.");
      resetCarNamesInput();

      return;
    }

    createCarInstance(carNames);
    showElement(tryNumSection);
    carNamesBtn.disabled = true;
  });
};

const onClickedTryNumBtn = () => {
  const tryNumBtn = tryNumSection.querySelector("button");
  tryNumBtn.addEventListener("click", () => {
    const tryNum = tryNumSection.querySelector("input").value;

    if (isInputNegative(tryNum) || isInputString(tryNum)) {
      alert("올바른 시도 횟수를 입력하세요.");
      resetTryNumInput();

      return;
    }
    playGame();
    // game이 잘 진행되었다면 game결과를 보여준다.
    setResultView();
    setWinnerView(getWinner());
    showElement(resultSection);
    showElement(winnerSection);
    tryNumBtn.disabled = true;
  });
};

const init = () => {
  resetView();
  onClickedCarNamesBtn();
  onClickedTryNumBtn();
};

init();
