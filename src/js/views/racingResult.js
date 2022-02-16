import { $ } from '../utils/dom.js';

const carPlayerTemplate = (name, distance) => {
  return `
    <div class="car-name mr-2">
      <div class="car-player">${name}</div>
      ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(distance)}
    </div>
  `;
};

export const renderFinalWinner = (finalWinner) => {
  $('#winner-names').innerHTML = `🏆 최종 우승자: ${finalWinner} 🏆`;
};

export const renderRacingResult = (cars) => {
  cars.forEach(({ name, distance }) => {
    $('#result-racing').insertAdjacentHTML('beforeend', carPlayerTemplate(name, distance));
  });
};
