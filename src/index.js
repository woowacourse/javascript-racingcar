import handleNameInput from './controller/handleNameInput.js';
import handleCountInput from './controller/handleCountInput.js';
import resetView from './view/resetView.js';

function initEvent() {
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

resetView();
initEvent();
