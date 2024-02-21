import RaceController from '../src/Controller/RaceController.js';
import CarList from '../src/Domain/CarList.js';
import * as missionUtils from '../src/Utils/MissionUtils.js';

describe('게임 컨트롤러 테스트', () => {
	let raceController;
	let mockIsForward;
	let carList;

	beforeEach(() => {
		raceController = new RaceController();
		mockIsForward = jest.spyOn(raceController, 'isForward');
		carList = new CarList(['시모', '리안']);
	});

	test('한턴에서 차들의 전진 여부 배열을 잘 반환하는지 확인', () => {
		const outputMock = [true, false];
		outputMock.forEach(output => {
			mockIsForward.mockReturnValueOnce(output);
		});

		expect(raceController.getOneTurnIsForwardArr(['리안', '시모'])).toEqual([
			true,
			false,
		]);
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
});

describe('전진 테스트', () => {
	test('랜덤 숫자가 4이상이면 전진이 true가 나오는지 확인', () => {
		//Arrange
		const raceController = new RaceController();
		const mockMakeRandomNum = jest.spyOn(missionUtils, 'makeRandomNum');
		mockMakeRandomNum.mockReturnValue(7);

		// Act & Assert
		expect(missionUtils.makeRandomNum(0, 9)).toBe(7);
		expect(raceController.isForward(7)).toBeTruthy();
	});
	test('랜덤 숫자가 4미만이면 전진이 false가 나오는지 확인', () => {
		const raceController = new RaceController();
		const mockMakeRandomNum = jest.spyOn(missionUtils, 'makeRandomNum');

		mockMakeRandomNum.mockReturnValue(2);
		// Act & Assert
		expect(missionUtils.makeRandomNum(0, 9)).toBe(2);
		expect(raceController.isForward(2)).toBeFalsy();
	});
});
