import { $ } from '../utils/selector.js';
import { hideElement } from '../utils/handleElement.js';
import { setEnabledAllForms } from './setFormState.js';

const resetView = () => {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.race-container').replaceChildren();
  $('.winner-container').replaceChildren();
  hideElement($('.count-form'));
  hideElement($('.restart'));
  setEnabledAllForms();
};

export default resetView;
