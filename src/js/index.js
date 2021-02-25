import CarGameManager from './CarGameManager.js';

window.onload = () => {
  const carGameManger = new CarGameManager(document.querySelector('#app'));
  carGameManger.initGame();
};
