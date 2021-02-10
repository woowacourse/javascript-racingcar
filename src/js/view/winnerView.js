import { selectors, globalTexts, globalClasses } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(selectors.winnerContainer).classList.toggle(globalClasses.displayNone);
};

export const displayWinnerView = function (winners) {
	const $winnerElement = $(selectors.winnerTextArea);
	$winnerElement.innerText = globalTexts.makeWinnerText(winners);
	toggleDisplayCountView();
};

export const initializeWinnerView = function () {
	const $winnerElement = $(selectors.winnerTextArea);
	$winnerElement.innerText = globalTexts.winnerText;
	toggleDisplayCountView();
};
