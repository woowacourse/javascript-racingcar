import CarGameManager from './CarGameManager.js';

window.onload = () => {
  new CarGameManager(document.querySelector('#app')).initGame();
};
