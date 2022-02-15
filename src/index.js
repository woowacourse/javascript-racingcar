import handleNameInput from './controller/handleNameInput.js';
import handleCountInput from './controller/handleCountInput.js';
import { resetView } from './view/showResult.js';

function eventHandler() {
  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    handleNameInput();
  });

  document.querySelector('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    handleCountInput();
  });

  document.querySelector('.restart').addEventListener('click', () => {
    resetView();
  });
}

eventHandler();
