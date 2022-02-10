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
  `;
}
