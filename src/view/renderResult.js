import { $ } from '../util/dom.js';

export const renderResult = cars => {
  console.log('00');
  $('#game-result').innerHTML = `${cars.map(car => {
    return `<div>name:${car.name} score:${car.score}</div>`;
  })}`;
};

const unitResult = cars => {};
