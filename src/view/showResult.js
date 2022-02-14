import $ from '../utils/selector.js';

const getPositionArrow = position => {
  return '<div class="result-arrow">⬇️️</div>'.repeat(position);
};

const getTemplateRaceResult = cars => {
  return `
    ${cars
      .map(
        ({ name, position }) =>
          `<div class="result-car-wrapper">
            <div class="result-car-name">${name}</div>
            <div class="result-arrow-container">${getPositionArrow(position)}</div> 
          </div>`,
      )
      .join('')}
  `;
};

const showResult = cars => {
  const div = document.createElement('div');
  div.className = 'race-result-container';
  div.innerHTML = getTemplateRaceResult(cars);
  $('.game-result-container').append(div);
};

export default showResult;
