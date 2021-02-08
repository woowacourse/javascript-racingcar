import Car from "./Car.js";
const parser = new DOMParser();
const sections = document.getElementsByTagName("section");
const state = {
  cars: [],
};

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
});

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
  state.cars.forEach((car) => {
    const resultDivString = `<div></div>`;
    const resultDiv = parseHTML(resultDivString);

    resultDiv.appendChild(showCarName(car.carName));
    for (let idx = 0; idx < car.totalStep; idx++) {
      const step = showTotalStep();
      resultDiv.appendChild(step);
    }
    sections[3].querySelector("div").append(resultDiv);
  });
};

const tryNumBtn = document.getElementsByTagName("button")[1];
tryNumBtn.addEventListener("click", () => {
  playGame();
  setResultView();
  showElement(sections[3]);
  showElement(sections[4]);
});

const init = () => {
  setSectionDataID();
  resetView([2, 3, 4]);
};

init();
