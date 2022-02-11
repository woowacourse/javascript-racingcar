import { BUTTON, DIRECTIVE, HEADER, WINNER } from './constants.js';
import * as style from './style.js';

export function headerTemplate() {
  return `
    <h1 style="${style.header}">${HEADER.MAIN}</h1>
  `;
}

export function carNamesTemplate() {
  return `
    <div>
      <p style="${style.directive}">${DIRECTIVE.CAR_NAME}</p>
      <div class="form">
        <input id="car-names-input" style="${style.input}"></input>
        <button id="car-names-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
      </div>
    </div>
    <div id="racing-count"></div>
    <div id="game-result"></div>
  `;
}

export function racingCountTemplate() {
  return `
    <div>
      <p style="${style.directive}">${DIRECTIVE.RACING_COUNT}</p>
      <div class="form">
        <input type="number" id="racing-count-input" style="${style.input}"></input>
        <button id="racing-count-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
      </div>
    </div>
  `;
}

export function carTemplate(car) {
  return `
    <div style="${style.carContainer}">
      <div style="${style.carName}"><span>${car.name}</span></div>
      <div style="${style.arrow}" class="move-forward-arrow" data-car-name="${car.name}"></div>
    </div>
  `;
}

export function carsTemplate(cars) {
  return `
    <div style="${style.carsContainer}">
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
