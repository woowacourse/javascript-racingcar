import Car from '../src/Domain/Car.js';

describe('차 컨트롤러 도메인 테스트', () => {
	//Arrange
	const car = new Car();

	test('랜덤 숫자가 4이상이면 전진이 true가 나오는지 확인', () => {
		//Arrange
		const randomNumber = 5;

		// Act & Assert
		expect(car.isForward(randomNumber)).toBeTruthy();
	});
	test('랜덤 숫자가 4미만이면 전진이 false가 나오는지 확인', () => {
		//Arrange
		const randomNumber = 3;

		// Act & Assert
		expect(car.isForward(randomNumber)).toBeFalsy();
	});

	test('결과값에 따른 공동 우승자 인덱스가 잘 반환되는지 확인', () => {
		//Arrange
		const resultCounter = [3, 3];

		// Act & Assert
		expect(car.decideWinner(resultCounter)).toEqual([0, 1]);
	});
	test('결과값에 따른 우승자 인덱스가 잘 반환되는지 확인', () => {
		//Arrange
		const resultCounter = [3, 4];

		// Act & Assert
		expect(car.decideWinner(resultCounter)).toEqual([1]);
	});
	test('게임을 한턴 진행하면서 전진 결과에 따라 해당하는 사람의 카운터를 잘 증가시키는지 확인', () => {
		//Arrange
		const mockIsForward = jest.spyOn(car, 'isForward');
		const outputMock = [true, false];
		const resultCounter = [0, 0];
		const carNames = ['시모', '리안'];
		// Act & Assert
		outputMock.forEach(output => {
			mockIsForward.mockReturnValueOnce(output);
		});

		car.playOneTurn(carNames, resultCounter);

		expect(resultCounter).toEqual([1, 0]);
	});
});
