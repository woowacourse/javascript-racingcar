import { WINNER_TEXT_SEPERATOR } from './constants.js';

const getCarRecordTemplate = (record) => {
  if (record === 1) {
    return '<div class="forward-icon mt-2">⬇️️</div>';
  }

  return Array(record).join('<div class="forward-icon mt-2">⬇️️</div>');
};

const getResultAreaTemplate = (carList) => {
  const resultAreaList = carList.map(
    (car) => `
    <div class="track">
      <div class="car-player mr-2">${car.carName}</div>
      ${getCarRecordTemplate(car.record)}
      <div class="d-flex justify-center mt-4">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    </div>
  `
  );

  return resultAreaList.join('');
};

const getWinnersTemplate = (winners) => {
  return `🏆 최종 우승자: ${winners.join(WINNER_TEXT_SEPERATOR)} 🏆`;
};

export { getResultAreaTemplate, getWinnersTemplate };
