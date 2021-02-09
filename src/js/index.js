import Car from "./Car.js";
import {
  showElement,
  resetView,
  setResultView,
  setWinnerView,
} from "./display-utils.js";
import { playGame, getWinner } from "./game-utils.js";

export const sections = document.getElementsByTagName("section");
export const state = {
  cars: [],
};

export const parseHTML = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

export const setSectionDataID = () => {
  for (let idx = 0; idx < sections.length; idx++) {
    sections[idx].dataset.id = `${idx}`;
  }
};

const getCarInstance = () => {
  const carNamesInput = document.getElementsByTagName("input")[0];
  const carNames = carNamesInput.value.split(",").map((carName) => {
    return carName.trim();
  });

  state.cars = carNames.map((carName) => {
    return new Car(carName);
  });
};

const onClickedCarNamesBtn = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];

  carNamesBtn.addEventListener("click", () => {
    getCarInstance();
    showElement(sections[2]);
    carNamesBtn.disabled = true;
  });
};

const onClickedTryNumBtn = () => {
  const tryNumBtn = document.getElementsByTagName("button")[1];
  tryNumBtn.addEventListener("click", () => {
    playGame();

    setResultView();
    setWinnerView(getWinner());
    showElement(sections[3]);
    showElement(sections[4]);
    tryNumBtn.disabled = true;
  });
};

const init = () => {
  setSectionDataID();
  resetView([2, 3, 4]);
  onClickedCarNamesBtn();
  onClickedTryNumBtn();
};

init();
