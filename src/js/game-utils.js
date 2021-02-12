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
import { showCarName, showTotalStep } from "./display-utils.js";
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

  return getTotalStep();
};

const deleteLoading = (resultDivs) => {
  resultDivs.forEach((resultDiv) => {
    if (resultDiv.querySelector(".spinner-container") !== null) {
      resultDiv.querySelector(".spinner-container").remove();
    }
  });
};

export const playGame = () => {
  const tryNumInput = tryNumSection.querySelector("input");
  state.cars.forEach((car) => {
    car.totalStep = 0;
  });
  let second = 1;
  let prevTotalStep = getTotalStep();

  resultSection.querySelector("div").innerHTML = "";
  const goStep = setInterval(() => {
    // 처음에만 car name 보여주기
    if (second === 1) {
      state.cars.forEach((car) => {
        const resultDivString = `<div></div>`;
        const resultDiv = parseHTML(resultDivString);
        resultDiv.setAttribute("class", "one-car-result");
        resultDiv.appendChild(showCarName(car.name));
        resultSection.querySelector("div").append(resultDiv);
      });
    }

    const currentTotalStep = setTotalStep();
    const resultDivs = resultSection
      .querySelector("div")
      .querySelectorAll(".one-car-result");
    // loading 지우기
    deleteLoading(resultDivs);
    // 게임 진행 (가거나 or 멈추거나)
    resultDivs.forEach((resultDiv, i) => {
      if (prevTotalStep[i] !== currentTotalStep[i]) {
        const step = showTotalStep();
        resultDiv.appendChild(step);
      }
      // loading 띄우기
      const loading = parseHTML(`<div class="relative spinner-container">
                                    <span class="material spinner"></span>
                                    </div>`);

      resultDiv.appendChild(loading);
    });

    prevTotalStep = currentTotalStep;

    // 게임 종료 조건
    if (second === Number(tryNumInput.value)) {
      deleteLoading(resultDivs);
      clearInterval(goStep);
      setWinnerView(getWinner());
    }
    second++;
  }, 1000);
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
