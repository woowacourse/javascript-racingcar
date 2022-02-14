import handleNameSubmit from './controller/handleNameSubmit.js';
import handleCountSubmit from './controller/handleCountSubmit.js';
import resetView from './view/resetView.js';

function addEventHandler() {
  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    handleNameSubmit();
  });

  document.querySelector('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    handleCountSubmit();
  });

  document.querySelector('.restart').addEventListener('click', () => {
    resetView();
  });
}

addEventHandler();
