import RacingCarController from './controller/RacingCarController.js';

const racingCarGame = new RacingCarController();

document.addEventListener('DOMContentLoaded', () => {
  racingCarGame.init();
});
