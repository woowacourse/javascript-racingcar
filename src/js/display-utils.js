import { parseHTML, sections, state } from "./index.js";
import { resetGame } from "./game-utils.js";

const hideElement = (element) => {
  return (element.style.display = "none");
};

export const showElement = (element) => {
  return (element.style.display = "block");
};

export const resetCarNamesInput = () => {
  sections[1].querySelector("input").value = "";
};

export const resetTryNumInput = () => {
  sections[2].querySelector("input").value = "";
};

export const resetView = (elementIdArray) => {
  elementIdArray.forEach((elementId) => {
    hideElement(sections[elementId]);
  });
  // for (let elementId of elementIdArray) {
  //   hideElement(sections[elementId]);
  // }
};

const showCarName = (carName) => {
  return parseHTML(`<div class="car-player mr-2">${carName}</div>`);
};

const showTotalStep = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

export const setResultView = () => {
  sections[3].querySelector("div").innerHTML = "";

  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);

    resultDiv.appendChild(showCarName(car.name));
    for (let idx = 0; idx < car.totalStep; idx++) {
      const step = showTotalStep();
      resultDiv.appendChild(step);
    }
    sections[3].querySelector("div").append(resultDiv);
  });
};

const getWinnerText = (winners) => {
  let winnerText = "";
  if (winners.length === 1) {
    winnerText = winners[0];
  } else {
    winnerText = winners.join(", ");
  }

  return winnerText;
};

export const setWinnerView = (winners) => {
  sections[4].innerHTML = "";
  const winnerText = getWinnerText(winners);

  const winnerTemplateString = `<h2>🏆 최종 우승자: ${winnerText} 🏆</h2>`;
  const winnerTemplate = parseHTML(winnerTemplateString);
  const resetBtnString = `<div class="d-flex justify-center">
                            <button type="button" class="btn btn-cyan">다시 시작하기</button>
                          </div>`;
  const resetBtn = parseHTML(resetBtnString);

  sections[4].append(winnerTemplate);
  sections[4].append(resetBtn);

  resetGame();
};
