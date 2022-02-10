import handleNameInput from './controller/handleNameInput.js';
import handleCountInput from './controller/handleCountInput.js';

function eventHandler() {
  // const cars = [];
  // const count = 0;

  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    handleNameInput();
  });

  document.querySelector('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    handleCountInput();
  });
}

eventHandler();
