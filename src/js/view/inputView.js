import { selectors, globalAttr } from '../keys.js';
import { $ } from '../utils.js';

export const initializeInputView = function () {
	$(selectors.carNamesInput).value = '';
	$(selectors.countInput).value = '';
	toggleDisplayCountView();
};

export const toggleDisplayCountView = function () {
	$(selectors.countContainer).classList.toggle(globalAttr.displayNoneClass);
};

export const toggleCarNameInputDisable = function () {
	$(selectors.carNamesInput).toggleAttribute(globalAttr.disabledAttr);
	$(selectors.carNamesSubmit).toggleAttribute(globalAttr.disabledAttr);
};

export const toggleCountInputDisable = function () {
	$(selectors.countInput).toggleAttribute(globalAttr.disabledAttr);
	$(selectors.countSubmit).toggleAttribute(globalAttr.disabledAttr);
};
