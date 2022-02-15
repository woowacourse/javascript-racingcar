import { raceState } from "../models/Race.js";

export function renderCarNames() {
  const racingCars = document.getElementById("racing-cars");
  raceState.cars.forEach((car) => {
    const racingProgress = document.createElement("div");
    racingProgress.className = "racing-progress flex-column";
    racingCars.appendChild(racingProgress);
    const carNameBox = document.createElement("div");
    carNameBox.className = "car-name-box";
    carNameBox.insertAdjacentHTML("afterbegin", car.name);
    racingProgress.appendChild(carNameBox);
  });
}

export function removeCarNames() {
  const racingCars = document.getElementById("racing-cars");
  racingCars.innerHTML = "";
}

export function renderProgressArrow(index) {
  const racingProgress = document.getElementsByClassName("racing-progress");
  const racingArrow = document.createElement("div");
  racingArrow.className = "racing-progress-arrow";
  racingArrow.insertAdjacentHTML("afterbegin", "⬇️️");
  racingProgress[index].appendChild(racingArrow);
}

export function renderWinners(names) {
  const racingWinner = document.getElementById("racing-winner");
  racingWinner.insertAdjacentHTML("afterbegin", `🏆 최종우승자: ${names} 🏆`);
}

export function removeWinners() {
  const racingWinner = document.getElementById("racing-winner");
  racingWinner.innerHTML = "";
}

export function renderRacingInputForm() {
  const racingInputForm = document.getElementById("racing-input-form");
  racingInputForm.style.display = "flex";
}

export function disapearRacingInputForm() {
  const racingInputForm = document.getElementById("racing-input-form");
  racingInputForm.style.display = "none";
}

export function renderRacingContainer() {
  const racingContainer = document.getElementById("racing-container");
  racingContainer.style.display = "flex";
}

export function disapearRacingContainer() {
  const racingContainer = document.getElementById("racing-container");
  racingContainer.style.display = "none";
}

export function changeDisableUserInputs() {
  const carNamesInput = document.getElementById("car-name-input");
  const carNamesInputBtn = document.getElementById("car-name-input-button");
  const racingNumberInput = document.getElementById("racing-number-input");
  const racingNumberInputBtn = document.getElementById(
    "racing-number-input-button"
  );
  carNamesInput.disabled = !carNamesInput.disabled;
  carNamesInputBtn.disabled = !carNamesInputBtn.disabled;
  racingNumberInput.disabled = !racingNumberInput.disabled;
  racingNumberInputBtn.disabled = !racingNumberInputBtn.disabled;
}

export function clearInputs() {
  const carNamesInput = document.getElementById("car-name-input");
  const racingNumberInput = document.getElementById("racing-number-input");
  carNamesInput.value = "";
  racingNumberInput.value = "";
}

export function renderRestartButton() {
  const racingContainer = document.getElementById("restart-button");
  racingContainer.style.display = "flex";
}
