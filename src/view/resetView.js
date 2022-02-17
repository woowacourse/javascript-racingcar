import { hideElement } from '../utils/handleElement.js';
import { $ } from '../utils/selector.js';
import { setEnabledAllForms } from './showProgress.js';

const resetView = () => {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.race-container').innerHTML = '';
  $('.winner-container').innerHTML = '';
  hideElement($('.count-form'));
  hideElement($('.restart'));
  setEnabledAllForms();
};

export default resetView;
