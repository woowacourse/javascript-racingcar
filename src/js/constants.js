export const SELECTOR = {
	APP: "#app",
	RACE_PROGRESS_SCREEN: "#race-progress-screen",
	WINNER_TEXT: "#winner-text",
	NAME_INPUT: "#name-input",
	COUNT_INPUT: "#count-input",
	SETTING_CONTAINER: "#setting-container",
	COUNT_SUBMIT_BUTTON: "#count-submit-button",
	NAME_SUBMIT_BUTTON: "#name-submit-button",
	RESET_BUTTON: "#reset-button",
	RACE_PROGRESS_SCREEN: "#race-progress-screen",
	CAR_PLAYER: ".car-player",
	SPINNER_CONTAINER_CONTAINER: ".spinner-container-container",
	RESULT_CONTAINER: "#result-container",
}

export const SETTING = {
	RANDOM_NUMBER: {
		MIN: 0,
		MAX: 9,
		MIN_MOVABLE: 4,
	},
	MAX_TOTAL_NUMBER_OF_NAMES: 9,
	MAX_NAME_LENGTH: 5,
	MAX_COUNT: 20000,
}

export const MESSAGE = {
	NAME_ALREADY_REGISTERED: "이미 이름이 등록되었습니다.",
	EMPTY_NAME: "빈 문자인 이름은 등록할 수 없습니다.",
	TOO_MANY_NAMES: `가로 스크롤 생성을 방지하기 위해 이름 등록은 ${SETTING.MAX_TOTAL_NUMBER_OF_NAMES}개 이하로 제한하고 있습니다.`,
	TOO_LONG_NAME: `${SETTING.MAX_NAME_LENGTH}자를 넘는 이름은 등록할 수 없습니다.`,
	OVERWRITTEN: "중복된 이름은 등록할 수 없습니다.",
	COUNT_ALREADY_REGISTERED: "이미 횟수를 설정하였습니다.",
	NAN: "유효한 숫자가 아닙니다.",
	NOT_NATURAL_NUMBER: "자연수만 설정할 수 있습니다.",
	TOO_BIG_COUNT: `원활한 게임을 위해 횟수는 ${SETTING.MAX_COUNT} 이하로 제한하고 있습니다.`,
}

Object.freeze(SELECTOR)
Object.freeze(SETTING)
Object.freeze(MESSAGE)
