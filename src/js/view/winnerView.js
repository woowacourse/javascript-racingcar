import { selectors, globalTexts, globalAttr, alertMsg } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(selectors.winnerContainer).classList.toggle(globalAttr.displayNoneClass);
};

export const displayWinnerView = function (winners) {
	const $winnerElement = $(selectors.winnerTextArea);
	$winnerElement.innerText = globalTexts.makeWinnerText(winners);
	toggleDisplayCountView();
	setTimeout(()=>alert(alertMsg.printWinners(winners)), 2000);
};

export const initializeWinnerView = function () {
	const $winnerElement = $(selectors.winnerTextArea);
	$winnerElement.innerText = globalTexts.winnerText;
	toggleDisplayCountView();
};
