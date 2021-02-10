import { globalClasses, selectors } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(selectors.racingContainer).classList.toggle(globalClasses.displayNone);
};

export const displayRacingCars = function (cars) {
	const classes = ['car-player', 'mr-2'];
	cars.forEach((car) => {
		$(selectors.racingCarsArea).innerHTML += `<div>
      <div class=${classes.join(' ')}>${car.name}</div>
    </div>`;
	});
	toggleDisplayCountView();
};

export const appendArrowElement = function (element) {
	const classes = ['forward-icon', 'mt-2'];
	element.innerHTML += `<div class=${classes.join(' ')}>⬇️️</div>`;
};

export const initializeRacingView = function () {
	toggleDisplayCountView();
	$(selectors.racingCarsArea).innerHTML = '';
};
