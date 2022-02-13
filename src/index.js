import handleNameFormSubmit from './controller/handleNameFormSubmit.js';
import handleCountFormSubmit from './controller/handleCountFormSubmit.js';
import resetView from './view/resetView.js';

function addEventHandler() {
  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    handleNameFormSubmit();
  });

  document.querySelector('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    handleCountFormSubmit();
  });

  document.querySelector('.restart').addEventListener('click', () => {
    resetView();
  });
}

addEventHandler();
