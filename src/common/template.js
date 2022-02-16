import { BUTTON, DIRECTIVE, HEADER, WINNER } from './constants.js';
import * as style from './style.js';

export function headerTemplate() {
  return `
    <h1 style="${style.header}">${HEADER.MAIN}</h1>
  `;
}

export function carNamesTemplate() {
  return `
    <article>
      <label style="${style.directive}">${DIRECTIVE.CAR_NAME}</label>
      <form>
        <input id="car-names-input" style="${style.input}"></input>
        <button type="button" id="car-names-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
      </form>
    </article>
    <article id="racing-count"></article>
    <article id="game-result"></article>
  `;
}

export function racingCountTemplate() {
  return `
    <label style="${style.directive}">${DIRECTIVE.RACING_COUNT}</label>
    <form>
      <input type="number" id="racing-count-input" style="${style.input}"></input>
      <button type="button" id="racing-count-submit" style="${style.button}">${BUTTON.SUBMIT}</button>
    </form>
  `;
}

export function carTemplate(car) {
  return `
    <article id="${car.name}" style="${style.carContainer}">
      <section style="${style.carName}"><span>${car.name}</span></section>
      <section class="move-forward-arrow" style="${style.arrow}" data-car-name="${car.name}"></section>
    </article>
  `;
}

export function carsTemplate(cars) {
  return `
    <section style="${style.carsContainer}">
      ${cars.map((car) => carTemplate(car)).join('')}
    </section>
  `;
}

export function winnersTemplate(winners) {
  return `
    <section id="winners" style="${style.winner}">
      ${WINNER.ICON} ${WINNER.TITLE}
      <span>${winners.join(', ')}</span>
      ${WINNER.ICON}
    </section>
  `;
}

export function restartTemplate() {
  return `
    <section style="${style.restartButtonContainer}">
      <button id="restart" style="${style.restartButton}">${BUTTON.RESTART}</button>
    </section>
  `;
}
