import { state, countSection, carPlayerSection, resultSection, parseHTML } from "./index.js";
import {
  hideView,
  resetCarNamesInput,
  resetTryNumInput,
  totalStepComponent,
  racingCarComponent,
  resetProgressView,
} from "./display-utils.js";

const GO_NUMBER = 3;
const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

export const playGame = async (tryNum) => {
  addCarName();

  for (let i = 0; i < tryNum; i++) {
    await playTurn(1000);
  }

  return;
};

export const removeLoading = (spinnerList) => {
  Array.from(spinnerList).forEach((spinner) => spinner.remove());
};

const playTurn = (sec) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      state.cars.forEach((car, idx) => {
        const spinnerList = document.getElementsByClassName("loading");
        if (spinnerList[idx] != null) {
          removeLoading(spinnerList);
        }

        const randomNum = getRandomNum();
        if (randomNum > GO_NUMBER) {
          car.go();
          document.getElementById(`${car.name}-progress`).appendChild(totalStepComponent());
        }

        document.getElementsByClassName("car-block")[idx].append(loadingHTML());
      });
      resolve();
    }, sec);
  });
};

const loadingHTML = () => {
  return parseHTML(`
        <div class="loading">
          <div class="d-flex justify-center mt-3">
            <div class="relative spinner-container">
              <span class="material spinner"></span>
            </div>
          </div>
        </div>`);
};

const addCarName = () => {
  state.cars.forEach((car) => {
    carPlayerSection.element.firstElementChild.appendChild(racingCarComponent(car.name));
  });
};

export const getWinner = () => {
  const maxTotalStep = Math.max(...state.cars.map((car) => car.totalStep), 0);
  const winners = state.cars.filter((car) => car.totalStep === maxTotalStep);

  return winners.map((car) => car.name);
};

export const resetGame = () => {
  const [carNamesBtn, tryNumBtn, resetBtn] = document.getElementsByTagName("button");

  resetBtn.addEventListener("click", () => {
    hideView([countSection, carPlayerSection, resultSection]);
    state.cars = [];

    resetCarNamesInput();
    resetTryNumInput();
    resetProgressView();
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};
