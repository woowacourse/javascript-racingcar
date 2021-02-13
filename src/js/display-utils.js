import { parseHTML, state } from "./index.js";
import { resetGame } from "./game-utils.js";
import {
  carNamesSection,
  tryNumSection,
  resultSection,
  winnerSection,
} from "./elements.js";

const hideElement = (element) => {
  return (element.style.display = "none");
};

export const showElement = (element) => {
  return (element.style.display = "block");
};

export const resetCarNamesInput = () => {
  carNamesSection.querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  tryNumSection.querySelector("input").value = "";
};

export const resetView = () => {
  hideElement(tryNumSection);
  hideElement(resultSection);
  hideElement(winnerSection);
};

const showCarName = (carName) => {
  return parseHTML(`<div class="car-player mr-2">${carName}</div>`);
};

const showOneStep = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

const showLoading = () => {
  return parseHTML(` <div class="d-flex justify-center mt-4 spinner-box">
                        <div class="relative spinner-container">
                          <span class="material spinner"></span>
                        </div>
                    </div>`);
};

export const deleteLoading = (resultDivs) => {
  resultDivs.forEach((resultDiv) => {
    if (resultDiv.querySelector(".spinner-box") !== null) {
      resultDiv.querySelector(".spinner-box").remove();
    }
  });
};

export const setCarNamesInResultView = () => {
  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);
    resultDiv.setAttribute("class", "one-car-result");
    resultDiv.appendChild(showCarName(car.name));
    resultSection.querySelector("div").append(resultDiv);
  });
};

const setLoadingInResultView = (resultDiv) => {
  const loading = showLoading();
  resultDiv.appendChild(loading);
};

export const setStepInResultView = (resultDiv) => {
  const step = showOneStep();
  resultDiv.appendChild(step);
};

export const setIconsInResultView = (
  second,
  resultDivs,
  prevTotalStep,
  currentTotalStep
) => {
  console.log(second, "초 때 state.cars.totalSteps", currentTotalStep);
  resultDivs.forEach((resultDiv, i) => {
    if (prevTotalStep[i] !== currentTotalStep[i]) {
      setStepInResultView(resultDiv); // 1초 전과 totalStep이 다르면 화살표 추가
    }
    setLoadingInResultView(resultDiv); // loading icon은 전체 div에 추가
  });
};

export const setResultView = () => {
  resultSection.querySelector("div").innerHTML = "";

  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);

    resultDiv.appendChild(showCarName(car.name));
    for (let idx = 0; idx < car.totalStep; idx++) {
      const step = showTotalStep();
      resultDiv.appendChild(step);
    }
    resultSection.querySelector("div").append(resultDiv);
  });
};

export const getWinnerText = (winners) => {
  let winnerText = "";
  if (winners.length === 1) {
    winnerText = winners[0];
  } else {
    winnerText = winners.join(", ");
  }

  return winnerText;
};

export const setWinnerView = (winners) => {
  winnerSection.innerHTML = "";
  const winnerText = getWinnerText(winners);

  const winnerTemplateString = `<h2>🏆 최종 우승자: ${winnerText} 🏆</h2>`;
  const winnerTemplate = parseHTML(winnerTemplateString);
  const resetBtnString = `<div class="d-flex justify-center">
                            <button type="button" class="btn btn-cyan">다시 시작하기</button>
                          </div>`;
  const resetBtn = parseHTML(resetBtnString);

  winnerSection.append(winnerTemplate);
  winnerSection.append(resetBtn);

  resetGame();
};
