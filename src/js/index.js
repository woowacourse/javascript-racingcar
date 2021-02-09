import Car from "./Car.js";
const parser = new DOMParser();
const sections = document.getElementsByTagName("section");
const state = {
  cars: [],
};

// To Do
// 1. 현재는 index를 통해 직접적으로 element들을 가져오고 있다. 바꾸는 것이 좋을 것 같다.

const hideElement = (element) => {
  return (element.style.display = "none");
};

const showElement = (element) => {
  return (element.style.display = "block");
};

const resetView = (elementIdArray) => {
  for (let elementId of elementIdArray) {
    hideElement(sections[elementId]);
  }
};

const parseHTML = (html) => {
  return parser.parseFromString(html, "text/html").body.firstElementChild;
};

const setSectionDataID = () => {
  for (let idx = 0; idx < sections.length; idx++) {
    sections[idx].dataset.id = `${idx}`;
  }
};

const resetCarNamesInput = () => {
  sections[1].querySelector("input").value = "";
};

const resetTryNumInput = () => {
  sections[2].querySelector("input").value = "";
};

const isCarNameEmpty = (carNames) => {
  if (carNames.includes("")) {
    alert("올바른 자동차 이름을 입력하세요.");
    resetCarNamesInput();

    return true;
  }
};

const isCarNameLengthValid = (carNames) => {
  const invalidCarNames = carNames.filter((carName) => carName.length > 5);
  if (invalidCarNames.length !== 0) {
    alert("올바른 자동차 이름을 입력하세요.");
    resetCarNamesInput();

    return true;
  }
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

const showCarName = (carName) => {
  return parseHTML(`<div class="car-player mr-2">${carName}</div>`);
};

const showTotalStep = () => {
  return parseHTML(`<div class="forward-icon mt-2">⬇️️</div>`);
};

const setResultView = () => {
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

const resetGame = () => {
  const carNamesBtn = document.getElementsByTagName("button")[0];
  const tryNumBtn = document.getElementsByTagName("button")[1];
  const resetBtn = document.getElementsByTagName("button")[2];

  resetBtn.addEventListener("click", () => {
    resetView([2, 3, 4]);
    state.cars = [];
    resetCarNamesInput();
    resetTryNumInput();
    tryNumBtn.disabled = false;
    carNamesBtn.disabled = false;
  });
};

const setWinnerView = (winners) => {
  sections[4].innerHTML = "";
  let winnerText = "";
  if (winners.length === 1) {
    winnerText = winners[0];
  } else {
    winnerText = winners.join(", ");
  }

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
