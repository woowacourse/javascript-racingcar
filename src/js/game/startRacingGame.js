import increaseWinnerCount from './playCarRacing.js';
import addSelectedWinner from './addSelectedWinner.js';

const printRacingResult = () => {
  carName.forEach((name) => {
    .insertAdjacentHTML(
      'beforeend',
      `${car.name}: ${'-'.repeat(car.distance)}<br>`,
    );
  });
  $resultScreenDiv.insertAdjacentHTML('beforeend', '<br>');
};

const playCarRacing = (count) => {
  for (let i = 0; i < count; i++) {
    increaseWinnerCount();
    printRacingResult();
  }
};

export const startRacingGame = (count) => {
  playCarRacing(count);
  addSelectedWinner();
};
