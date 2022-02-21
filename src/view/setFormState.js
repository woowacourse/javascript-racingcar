import { setElementDisabled, setElementEnable } from '../utils/handleElement.js';
import { $ } from '../utils/selector.js';

export const setDisabledAllForms = () => {
  setElementDisabled($('.name-input'));
  setElementDisabled($('.name-button'));
  setElementDisabled($('.count-input'));
  setElementDisabled($('.count-button'));
};

export const setEnabledAllForms = () => {
  setElementEnable($('.name-input'));
  setElementEnable($('.name-button'));
  setElementEnable($('.count-input'));
  setElementEnable($('.count-button'));
};
