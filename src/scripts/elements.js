const $carNameSubmit = document.querySelector('#car-name-submit');
const $playGameButton = document.querySelector('#play-game-button');
const $carNameInput = document.querySelector('#car-name-input');
const $tryCountInput = document.querySelector('#try-count-input');
const $resultArea = document.querySelector('#result-area');
const $winners = document.querySelector('#winners');
const $restartButton = document.querySelector('#restart-button');

const getSpinnerElements = () =>
  Array.from(document.querySelectorAll('.spinner-container'));

const getTrackElements = () => Array.from(document.querySelectorAll('.track'));

export {
  $carNameSubmit,
  $playGameButton,
  $carNameInput,
  $tryCountInput,
  $resultArea,
  $winners,
  $restartButton,
  getSpinnerElements,
  getTrackElements,
};
