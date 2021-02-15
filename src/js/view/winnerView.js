import { SELECTOR, GLOBAL_TEXT, GLOBAL_ATTR } from '../keys.js';
import { $, sleep } from '../utils.js';

const toggleDisplayCountView = function () {
	$(SELECTOR.WINNER_CONTAINER).classList.toggle(
		GLOBAL_ATTR.CLASS_DISPLAY_NONE,
	);
};

export const displayWinnerView = async function (winners) {
	const $winnerElement = $(SELECTOR.WINNER_TEXT_AREA);
	$winnerElement.innerText = GLOBAL_TEXT.MAKE_WINNER_TEXT(winners);
	toggleDisplayCountView();
	await sleep(2);
	alert(GLOBAL_TEXT.MAKE_WINNER_TEXT(winners));
};

export const initializeWinnerView = function () {
	const $winnerElement = $(SELECTOR.WINNER_TEXT_AREA);
	$winnerElement.innerText = GLOBAL_TEXT.WINNER_TEXT;
	toggleDisplayCountView();
};
