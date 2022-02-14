import handleNameInput from './controller/handleNameInput.js';
import handleCountInput from './controller/handleCountInput.js';
import resetView from './view/resetView.js';
import $ from './utils/selector.js';

const initEvent = () => {
  $('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    handleNameInput();
  });

  $('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    handleCountInput();
  });

  $('.restart').addEventListener('click', () => {
    resetView();
  });
};

resetView();
initEvent();
