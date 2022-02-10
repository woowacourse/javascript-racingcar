import { $ } from '../util/dom.js';

export const renderResult = cars => {
  console.log('00');
  $('#game-result').innerHTML += `${cars
    .map(car => {
      return `<div>name:${car.name} score:${'⬇️'.repeat(car.score)}</div>`;
    })
    .join('')}`;
};

const unitResult = cars => {};

//const scoreEmoji = '⬇️'.repeat(score);

// ⬇️️
