import { BUTTON, DIRECTIVE, HEADER } from './constants.js';

export function headerTemplate() {
  return `
    <h1>${HEADER.MAIN}</h1>
  `;
}

export function gameSettingTemplate() {
  return `
    <div>
      <p>${DIRECTIVE.CAR_NAME}</p>
      <form>
        <input id="car-name-input"></input>
        <button id="car-name-submit">${BUTTON.SUBMIT}</button>
      </form>
      <p>${DIRECTIVE.RACING_COUNT}</p>
      <form>
        <input id="racing-count-input"></input>
        <button id="racing-count-submit">${BUTTON.SUBMIT}</button>
      </form>
    </div>
  `;
}
