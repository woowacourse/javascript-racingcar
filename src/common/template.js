import { BUTTON, DIRECTIVE, HEADER } from './constants.js';

export function headerTemplate() {
  return `
    <h1>${HEADER.MAIN}</h1>
  `;
}

export function carNamesTemplate() {
  return `
    <p>${DIRECTIVE.CAR_NAME}</p>
    <div>
      <input id="car-names-input"></input>
      <button id="car-names-submit">${BUTTON.SUBMIT}</button>
    </div>
    <div id="racing-count"></div>
  `;
}

export function racingCountTemplate() {
  return `
    <p>${DIRECTIVE.RACING_COUNT}</p>
    <div>
      <input type="number" id="racing-count-input"></input>
      <button id="racing-count-submit">${BUTTON.SUBMIT}</button>
    </div>
    <div id="game-result"></div>
  `;
}

export function carTemplate(car) {
  return `
    <div>${car.name}</div>
    <div class="move-forward-arrow" data-car-name="${car.name}"></div>
  `;
}

export function carsTemplate(cars) {
  return `
    <div>
      ${cars.map((car) => carTemplate(car)).join('')}
    </div>
  `;
}
