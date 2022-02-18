import handleNameInput from './controller/handleNameInput.js';
import handleCountInput from './controller/handleCountInput.js';
import resetView from './view/resetView.js';
import { $ } from './utils/selector.js';

const submitName = e => {
  e.preventDefault();
  handleNameInput();
};

const submitCount = e => {
  e.preventDefault();
  handleCountInput();
};

const initEvent = () => {
  $('.name-form').addEventListener('submit', submitName);
  $('.count-form').addEventListener('submit', submitCount);
  $('.restart').addEventListener('click', resetView);
};

resetView();
initEvent();
