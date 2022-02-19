import { BUTTON, CAR, DIRECTIVE, HEADER, WINNER } from './constants.js';
import * as style from './style.js';

export function headerTemplate() {
  return `
    <h1 style="${style.header}">${HEADER.MAIN}</h1>
  `;
}

export function carNamesTemplate() {
  return `
    <form>
      <p style="${style.directive}">${DIRECTIVE.CAR_NAME}</p>
      <div class="car-names-input-container">
        <input id="car-names-input" style="${style.input}" />
        <button type="submit" id="car-names-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
      </div>
    </form>
    <form id="racing-count"></form>
    <div id="game-result"></div>
  `;
}

export function racingCountTemplate() {
  return `
    <p style="${style.directive}">${DIRECTIVE.RACING_COUNT}</p>
    <div class="racing-count-input-container">
      <input type="number" id="racing-count-input" style="${style.input}" />
      <button type="submit" id="racing-count-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
      </div>
    </div>
  `;
}

export function carTemplate(car) {
  return `
    <div style="${style.carContainer}">
      <div style="${style.carName}"><span>${car.name}</span></div>
      <div style="${style.arrow}" class="move-forward-arrow" data-car-name="${car.name}"></div>
      <img id="spinner" style="${style.spinner}" src="src/image/loading.png" class="hidden" alt="로딩" />
    </div>
  `;
}

export function racingProgressTemplate() {
  return `<p>${CAR.MOVE_FORWARD_ARROW}</p>`;
}

export function carsTemplate(cars) {
  return `
    <div id="cars-container" style="${style.carsContainer}">
      ${cars.map((car) => carTemplate(car)).join('')}
    </div>
  `;
}

export function winnersTemplate(winners) {
  return `
    <div id="winners" style="${style.winner}">
      ${WINNER.ICON} ${WINNER.TITLE}
      <span>${winners.join(', ')}</span>
      ${WINNER.ICON}
    </div>
  `;
}

export function restartTemplate() {
  return `
    <div style="${style.restartButtonContainer}">
      <button id="restart" style="${style.restartButton}">${BUTTON.RESTART}</button>
    </div>
  `;
}
