import { makeRandomNum } from '../src/Utils/MissionUtils.js';
import RaceController from '../src/Controller/RaceController.js';

jest.mock('../src/Utils/MissionUtils.js', () => ({
	makeRandomNum: jest.fn(),
}));

describe('게임 컨트롤러 테스트', () => {
	//Arrange
	let raceController;
	let carList;
	let mockIsForward;

	beforeEach(() => {
		raceController = new RaceController();
		carList = raceController.makeCarList(['시모', '리안']);
		mockIsForward = jest.spyOn(raceController, 'isForward');
	});

	test('한턴에서 전진 결과에 따라 자동차가 잘 이동되는지 확인', () => {
		const outputMock = [true, false];

		outputMock.forEach(output => {
			mockIsForward.mockReturnValueOnce(output);
		});
		raceController.playOneTurn(carList);
		// Act & Assert
		expect(carList.getDistance()).toEqual([1, 0]);
	});
	test('모든 턴에서 전진 결과에 따라 자동차가 잘 이동되는지 확인', () => {
		const outputMock = [true, false, true, true];

		outputMock.forEach(output => {
			mockIsForward.mockReturnValueOnce(output);
		});
		raceController.playAllTurn(carList, 2);
		// Act & Assert
		expect(carList.getDistance()).toEqual([2, 1]);
	});
	test('연속된 레이스의 결과값이 반환되는지 확인', () => {
		const outputMock = [true, false, true, true];

		outputMock.forEach(output => {
			mockIsForward.mockReturnValueOnce(output);
		});
		raceController.playAllTurn(carList, 2);
		// Act & Assert
		expect(raceController.makeOneTurnResult(carList)).toEqual([
			['시모', 2],
			['리안', 1],
		]);
	});
});

describe('전진 테스트', () => {
	test('랜덤 숫자가 4이상이면 전진이 true가 나오는지 확인', () => {
		//Arrange
		const raceController = new RaceController();
		makeRandomNum.mockReturnValue(5);

		// Act & Assert
		expect(raceController.isForward()).toBeTruthy();
	});
	test('랜덤 숫자가 4미만이면 전진이 false가 나오는지 확인', () => {
		const raceController = new RaceController();
		makeRandomNum.mockReturnValue(3);

		// Act & Assert
		expect(raceController.isForward()).toBeFalsy();
	});
});
