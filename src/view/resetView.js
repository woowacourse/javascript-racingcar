import hideElement from '../utils/hideElement.js';
import { $ } from '../utils/selector.js';

const resetView = () => {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.race-container').innerHTML = '';
  $('.winner-container').innerHTML = '';
  hideElement($('.count-form'));
  hideElement($('.restart'));
};

export default resetView;
