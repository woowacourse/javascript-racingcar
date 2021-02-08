import Car from "./Car.js";

const sections = document.getElementsByTagName("section");

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

  const cars = carNames.map((carName) => {
    return new Car(carName);
  });

  showElement(sections[2]);
});

const init = () => {
  setSectionDataID();
  resetView([2, 3, 4]);
};

init();
