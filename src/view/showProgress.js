import { DEFAULT_DELAY } from '../utils/constants.js';
import { $, $$ } from '../utils/selector.js';

const getRaceTemplate = cars => {
  return `
    ${cars
      .map(
        ({ name, position }) =>
          `<div class="car-wrapper">
            <div class="car-name">${name}</div>
            <div class="arrow-container" data-position-count="${position}"></div> 
            <div class="loader"></div>
          </div>`,
      )
      .join('')}
  `;
};

export const showCarElements = cars => {
  $('.race-container').insertAdjacentHTML('beforeend', getRaceTemplate(cars));
};

const paintOneArrow = (container, positionCount) => {
  if (positionCount === 0) {
    return;
  }

  const arrowProgress = setInterval(() => {
    positionCount -= 1;
    if (positionCount === 0) {
      clearInterval(arrowProgress);
    }
    container.insertAdjacentHTML('beforeend', '<div class="arrow">⬇️️</div>');
  }, DEFAULT_DELAY);
};

export const showArrowProgress = () => {
  $$('.arrow-container').forEach(container => {
    const { positionCount } = container.dataset;
    paintOneArrow(container, Number(positionCount));
  });
};
