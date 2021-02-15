import { WINNER_TEXT_SEPERATOR } from './constants.js';

const getCarRecordTemplate = (record) => {
  return Array(record).join('<div class="forward-icon mt-2">⬇️️</div>');
};

const getResultAreaTemplate = (carList) => {
  const resultAreaList = carList.map(
    (car) => `
    <div>
      <div class="car-player mr-2">${car.carName}</div>
      ${getCarRecordTemplate(car.record)}
    </div>
  `
  );

  return resultAreaList.join('');
};

const getWinnersTemplate = (winners) => {
  return `🏆 최종 우승자: ${winners.join(WINNER_TEXT_SEPERATOR)} 🏆`;
};

export { getResultAreaTemplate, getWinnersTemplate };
