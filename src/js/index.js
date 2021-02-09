import Car from "./Car.js";
import {
  showElement,
  resetView,
  setResultView,
  setWinnerView,
} from "./display-utils.js";

export const sections = document.getElementsByTagName("section");
export const state = {
  cars: [],
};

export const parseHTML = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

const setSectionDataID = () => {
  for (let idx = 0; idx < sections.length; idx++) {
    sections[idx].dataset.id = `${idx}`;
  }
};

const onClickedCarNamesBtn = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];
  carNamesBtn.addEventListener("click", () => {
    const carNamesInput = document.getElementsByTagName("input")[0];
    const carNames = carNamesInput.value.split(",").map((carName) => {
      return carName.trim();
    });

    state.cars = carNames.map((carName) => {
      return new Car(carName);
    });

    showElement(sections[2]);
    carNamesBtn.disabled = true;
  });
};

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const setTotalStep = () => {
  state.cars.forEach((car) => {
    const randomNum = getRandomNum();
    if (randomNum > 3) {
      car.go();
    }
  });
};

const playGame = () => {
  const tryNumInput = document.getElementsByTagName("input")[1];
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });

  for (let i = 0; i < tryNumInput.value; i++) {
    setTotalStep();
  }
};

const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  const winners = state.cars.filter((car) => {
    if (car.totalStep === maxTotalStep) {
      return car;
    }
  });

  return winners.map((winner) => {
    return winner.name;
  });
};

export const resetGame = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];
  const tryNumBtn = document.getElementsByTagName("button")[1];
  const resetBtn = document.getElementsByTagName("button")[2];

  resetBtn.addEventListener("click", () => {
    resetView([2, 3, 4]);
    state.cars = [];

    sections[1].querySelector("input").value = "";
    sections[2].querySelector("input").value = "";
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};

const onClickedtryNumBtn = () => {
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
  onClickedtryNumBtn();
};

init();
