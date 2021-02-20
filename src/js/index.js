import CarGameManager from './CarGameManager.js';

window.onload = () => {
  document.querySelector('#car-names-input').focus();

  new CarGameManager(document.querySelector('#app')).initGame();
};
