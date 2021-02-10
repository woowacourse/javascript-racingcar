import { selectors, globalClasses } from '../keys.js';
import { $ } from '../utils.js';

export const initializeInputView = function () {
	$(selectors.carNamesInput).value = '';
	$(selectors.countInput).value = '';
	toggleDisplayCountView();
};

export const toggleDisplayCountView = function () {
	$(selectors.countContainer).classList.toggle(globalClasses.displayNone);
};

export const toggleCarNameInputDisable = function () {
	$(selectors.carNamesInput).toggleAttribute('disabled');
	$(selectors.carNamesSubmit).toggleAttribute('disabled');
};

export const toggleCountInputDisable = function () {
	$(selectors.countInput).toggleAttribute('disabled');
	$(selectors.countSubmit).toggleAttribute('disabled');
};
