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

export const showElement = (element, type) => {
  return (element.style.display = type);
};

export const hideSpinner = (resultDivs) => {
  resultDivs.forEach((resultDiv) => {
    if (resultDiv.querySelector(".spinner-box") !== null) {
      const spinnerBox = resultDiv.querySelector(".spinner-box");
      hideElement(spinnerBox);
    }
  });
};

export const showSpinner = (resultDivs) => {
  resultDivs.forEach((resultDiv) => {
    const spinnerBox = resultDiv.querySelector(".spinner-box");
    showElement(spinnerBox, "flex");
  });
};

export const showStep = (resultDivs, movingCarIndexs) => {
  movingCarIndexs.forEach((idx) => {
    setStepInResultView(resultDivs[idx]);
  });
};

export const resetCarNamesInput = () => {
  carNamesSection.querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  tryNumSection.querySelector("input").value = "";
};

export const resetGameResultSections = () => {
  resultSection.querySelector("div").innerHTML = "";
  winnerSection.innerHTML = "";
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
  return parseHTML(`<div class="d-flex justify-center mt-4 spinner-box">
                        <div class="relative spinner-container">
                          <span class="material spinner"></span>
                        </div>
                    </div>`);
};

export const initResultView = () => {
  state.cars.forEach((car) => {
    const resultDivString = `<div class="one-car-result"></div>`;
    const resultDiv = parseHTML(resultDivString);

    const forwardDivString = `<div id="forward-icon-box"></div>`;
    const forwardDiv = parseHTML(forwardDivString);

    const loading = showLoading();

    resultDiv.appendChild(showCarName(car.name));
    resultDiv.appendChild(forwardDiv);
    resultDiv.appendChild(loading);
    hideElement(loading);

    resultSection.querySelector("div").append(resultDiv);
  });
};

export const setLoadingInResultView = (resultDiv) => {
  const loading = showLoading();
  resultDiv.appendChild(loading);
};

export const setStepInResultView = (resultDiv) => {
  const step = showOneStep();
  resultDiv.querySelector("#forward-icon-box").appendChild(step);
};

export const getWinnerText = (winners) => {
  let winnerText = "";

  winnerText =
    winners.length === 1
      ? (winnerText = winners[0])
      : (winnerText = winners.join(", "));

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
