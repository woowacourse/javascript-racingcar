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
  racingCars.replaceChildren();
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
  racingWinner.replaceChildren();
}

export function renderRoundCountInputForm() {
  const racingInputForm = document.getElementById("round-count-input-form");
  racingInputForm.classList.remove("display-none");
  racingInputForm.classList.add("flex");
}

export function hideRoundCountInputForm() {
  const racingInputForm = document.getElementById("round-count-input-form");
  racingInputForm.classList.remove("flex");
  racingInputForm.classList.add("display-none");
}

export function renderRacingContainer() {
  const racingContainer = document.getElementById("racing-container");
  racingContainer.classList.remove("display-none");
  racingContainer.classList.add("flex");
}

export function hideRacingContainer() {
  const racingContainer = document.getElementById("racing-container");
  racingContainer.classList.remove("flex");
  racingContainer.classList.add("display-none");
}

export function changeDisableUserInputs() {
  const carNamesInput = document.getElementById("car-name-input");
  const carNamesInputButton = document.getElementById("car-name-input-button");
  const roundCountInput = document.getElementById("round-count-input");
  const roundCountInputButton = document.getElementById(
    "round-count-input-button"
  );
  carNamesInput.disabled = !carNamesInput.disabled;
  carNamesInputButton.disabled = !carNamesInputButton.disabled;
  roundCountInput.disabled = !roundCountInput.disabled;
  roundCountInputButton.disabled = !roundCountInputButton.disabled;
}

export function clearInputs() {
  const carNamesInput = document.getElementById("car-name-input");
  const roundCountInput = document.getElementById("round-count-input");
  carNamesInput.value = "";
  roundCountInput.value = "";
}

export function renderRestartButton() {
  const racingContainer = document.getElementById("restart-button");
  racingContainer.classList.remove("display-none");
  racingContainer.classList.add("flex");
}

export function hideRestartButton() {
  const racingContainer = document.getElementById("restart-button");
  racingContainer.classList.remove("flex");
  racingContainer.classList.add("display-none");
}

export async function renderLoadingSpinner() {
  const racingProgress = document.querySelectorAll(".racing-progress");
  racingProgress.forEach((childNode) => {
    const loading = document.createElement("div");
    loading.className = "flex-center";
    loading.insertAdjacentHTML(
      "afterbegin",
      `<div class="relative spinner-container">
         <span class="material spinner"></span>
      </div>`
    );
    childNode.appendChild(loading);
  });
}

export function hideLoadingSpinner() {
  const racingProgress = document.querySelectorAll(".racing-progress");
  racingProgress.forEach((childNode) => {
    childNode.removeChild(childNode.lastChild);
  });
}
