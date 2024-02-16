import { makeRandomNum } from '../src/Utils/MissionUtils.js';
import GameController from '../src/Controller/GameController.js';

jest.mock('../src/Utils/MissionUtils.js', () => ({
	makeRandomNum: jest.fn(),
}));

describe('게임 컨트롤러 테스트', () => {
	//Arrange
	let gameController;

	beforeEach(() => {
		const carNames = ['시모', '리안'];
		const tryNumber = 3;
		gameController = new GameController(carNames, tryNumber);
	});

	test('랜덤 숫자가 4이상이면 전진이 true가 나오는지 확인', () => {
		//Arrange
		makeRandomNum.mockReturnValue(5);

		// Act & Assert
		expect(gameController.isForward()).toBeTruthy();
	});
	test('랜덤 숫자가 4미만이면 전진이 false가 나오는지 확인', () => {
		//Arrange
		makeRandomNum.mockReturnValue(3);

		// Act & Assert
		expect(gameController.isForward()).toBeFalsy();
	});

	// test('결과값에 따른 공동 우승자 인덱스가 잘 반환되는지 확인', () => {
	// 	//Arrange
	// 	gameController.resultCounter = [3, 3];

	// 	// Act & Assert
	// 	expect(gameController.isForward()).toEqual([0, 1]);
	// });
	// test('결과값에 따른 우승자 인덱스가 잘 반환되는지 확인', () => {
	// 	//Arrange
	// 	gameController.resultCounter = [3, 4];
	// });
});
// 	// Act & Assert
// 	expect(carController.decideWinner()).toEqual([1]);
// });
// test.skip('게임을 한턴 진행하면서 전진 결과에 따라 해당하는 사람의 카운터를 잘 증가시키는지 확인', () => {
// 	const mockIsForward = jest.spyOn(carController, 'isForward');
//
// 	// Act & Assert
// 	const outputMock = [true, false];
//
// 	outputMock.forEach(output => {
// 		mockIsForward.mockReturnValueOnce(output);
// 	});
//
// 	carController.playOneTurn();
//
// 	expect(carController.).toEqual([1, 0]);
// });
