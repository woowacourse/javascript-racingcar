export const SELECTOR = {
	CAR_NAMES_CONTAINER: '#car-names-container',
	CAR_NAMES_INPUT: '#car-names-input',
	CAR_NAMES_SUBMIT: '#car-names-submit',
	COUNT_CONTAINER: '#count-container',
	COUNT_INPUT: '#count-input',
	COUNT_SUBMIT: '#count-submit',
	CAR_PLAYER: '.car-player',
	RACING_CONTAINER: '#racing-container',
	RACING_CARS_AREA: `#racing-container > section > div`,
	WINNER_CONTAINER: '#winner-container',
	WINNER_TEXT_AREA: `#winner-container > section > h2`,
	RESTART_BUTTON: '#restart-button',
	SPINNER_CONTAINER: '.spinner-container',
};

export const BOUND = {
	CAR_NAMES_LENGTH_LOWER_BOUND: 1,
	CAR_NAMES_LENGTH_UPPER_BOUND: 5,
	COUNT_LOWER_BOUND: 1,
	COUNT_UPPER_BOUND: 100,
	CARS_UPPER_BOUND: 10,
	THRESH_GOING: 4,
};

export const GLOBAL_ATTR = {
	CLASS_DISPLAY_NONE: 'strong-display-none',
	CLASS_DISABLED_ATTR: 'disabled',
};

export const GLOBAL_HTML_TEMPLATE = {
	SPINNER: `<div class="d-flex justify-center mt-4">
	<div class="relative spinner-container">
	  <span class="material spinner"></span>
	</div>
  </div>`,
	GET_CAR_PLAYER: (car) => `<div>
	<div class="car-player mt-2">${car.name}</div>
  </div>`,
};

export const GLOBAL_TEXT = {
	WINNER_TEXT: '🏆 최종 우승자: 🏆',
	MAKE_WINNER_TEXT: (nameList) => `🏆 최종 우승자: ${nameList.join(', ')} 🏆`,
};

export const ALERT_MESSAGE = {
	NOT_VALID_CARNAMES: '❌ 유효한 자동차이름이 아닙니다.',
	NOT_VALID_CARNAMES_LENGTH: '❌ 자동차는 10대를 넘을 수 없습니다.',
	NOT_VALID_COUNT: '❌ 시도할 횟수는 1이상 100이하여야 합니다.',
};
