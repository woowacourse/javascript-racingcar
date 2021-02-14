import { SELECTOR, GLOBAL_ATTR } from '../keys.js';
import { $ } from '../utils.js';

export const initializeInputView = function () {
	$(SELECTOR.CAR_NAMES_INPUT).value = '';
	$(SELECTOR.COUNT_INPUT).value = '';
	toggleDisplayCountView();
};

export const toggleDisplayCountView = function () {
	$(SELECTOR.COUNT_CONTAINER).classList.toggle(
		GLOBAL_ATTR.CLASS_DISPLAY_NONE,
	);
};

export const toggleCarNameInputDisable = function () {
	$(SELECTOR.CAR_NAMES_INPUT).toggleAttribute(
		GLOBAL_ATTR.CLASS_DISABLED_ATTR,
	);
	$(SELECTOR.CAR_NAMES_SUBMIT).toggleAttribute(
		GLOBAL_ATTR.CLASS_DISABLED_ATTR,
	);
};

export const toggleCountInputDisable = function () {
	$(SELECTOR.COUNT_INPUT).toggleAttribute(GLOBAL_ATTR.CLASS_DISABLED_ATTR);
	$(SELECTOR.COUNT_SUBMIT).toggleAttribute(GLOBAL_ATTR.CLASS_DISABLED_ATTR);
};
