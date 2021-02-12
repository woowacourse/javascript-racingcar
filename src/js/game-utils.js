import { state, parseHTML } from "./index.js";
import {
  resetView,
  resetCarNamesInput,
  resetTryNumInput,
  setWinnerView,
} from "./display-utils.js";
import {
  carNamesSection,
  tryNumSection,
  resultSection,
  winnerSection,
} from "./elements.js";
import { showCarName, showOneStep } from "./display-utils.js";
import { isCarNameLengthValid } from "./validate-input.js";

const GO_NUMBER = 3;

const getRandomNum = () => {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max - min) + min);
};

const getTotalStep = () => {
  return state.cars.map((car) => {
    return car.totalStep;
  });
};

const setTotalStep = () => {
  state.cars.forEach((car) => {
    const randomNum = getRandomNum();
    if (randomNum > GO_NUMBER) {
      car.go();
    }
  });
};

const deleteLoading = (resultDivs) => {
  resultDivs.forEach((resultDiv) => {
    if (resultDiv.querySelector(".spinner-container") !== null) {
      resultDiv.querySelector(".spinner-container").remove();
    }
  });
};

const setCarNamesInResultView = () => {
  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);
    resultDiv.setAttribute("class", "one-car-result");
    resultDiv.appendChild(showCarName(car.name));
    resultSection.querySelector("div").append(resultDiv);
  });
};

const showLoading = () => {
  return parseHTML(`<div class="relative spinner-container">
  <span class="material spinner"></span>
  </div>`);
};

const setLoadingInResultView = (resultDiv) => {
  const loading = showLoading();
  resultDiv.appendChild(loading);
};

const setStepInResultView = (resultDiv) => {
  const step = showOneStep();
  resultDiv.appendChild(step);
};

const playGameForSecond = (second) => {
  const tryNumInput = tryNumSection.querySelector("input");
  let prevTotalStep = getTotalStep();
  console.log("시도 횟수", tryNumInput.value, prevTotalStep);

  const goStep = setInterval(() => {
    const resultDivs = resultSection
      .querySelector("div")
      .querySelectorAll(".one-car-result");

    if (second === 1) {
      setCarNamesInResultView(); // 처음에만 car name 보여주기
    }

    setTotalStep();
    console.log("1초 흐름");
    console.log("prev", prevTotalStep);
    deleteLoading(resultDivs);

    const currentTotalStep = getTotalStep();
    resultDivs.forEach((resultDiv, i) => {
      // 게임 진행 (가거나 or 멈추거나)
      console.log(second, "prev", prevTotalStep, "cur", currentTotalStep);
      if (prevTotalStep[i] !== currentTotalStep[i]) {
        setStepInResultView(resultDiv);
      }
      setLoadingInResultView(resultDiv);
    });

    prevTotalStep = currentTotalStep;

    // 게임 종료 조건
    if (second === Number(tryNumInput.value)) {
      deleteLoading(resultDivs);
      setWinnerView(getWinner());
      clearInterval(goStep);
    }

    second++;
  }, 1000);
};

export const playGame = () => {
  let second = 1;
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });

  resultSection.querySelector("div").innerHTML = "";

  playGameForSecond(second);
};
// 우승자 이름을 배열로 리턴한다.
export const getWinner = () => {
  state.cars.sort((a, b) => {
    return b.totalStep - a.totalStep;
  });

  const maxTotalStep = state.cars[0].totalStep;
  console.log("getWinner() 안");
  console.log(state.cars);
  console.log(maxTotalStep);
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
