export const selectors = {
	carNamesContainer: '#car-names-container',
	carNamesInput: '#car-names-input',
	carNamesSubmit: '#car-names-submit',
	countContainer: '#count-container',
	countInput: '#count-input',
	countSubmit: '#count-submit',
	carPlayer: '.car-player',
	racingContainer: '#racing-container',
	racingCarsArea: `#racing-container > section > div`,
	winnerContainer: '#winner-container',
	winnerTextArea: `#winner-container > section > h2`,
	restartButton: '#restart-button',
};

export const bounds = {
	lengthLowerBound: 1,
	lengthUpperBound: 5,
	countLowerBound: 1,
	countUpperBound: 100,
};

export const globalTexts = {
	winnerText: '🏆 최종 우승자 🏆',
	makeWinnerText: (nameList) => `🏆 최종 우승자: ${nameList.join(', ')} 🏆`,
};

export const alertMsg = {
	isNotValidCarNames: '❌ 유효한 자동차이름이 아닙니다.',
	isNotValidCarNamesLength: '❌ 자동차는 10대를 넘을 수 없습니다.',
	isNotValidCount: '❌ 시도할 횟수는 1이상 100이하여야 합니다.',
};
