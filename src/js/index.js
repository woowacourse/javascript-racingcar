import CarGameManager from './CarGameManager.js';

new CarGameManager(document.querySelector('#app')).initGame();

window.onload = () => {
  document.querySelector('#car-names-input').focus();
};
