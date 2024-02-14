import CarList from '../src/Model/CarList.js';

describe('자동차 도메인 테스트', () => {
	const errorNameMock = [['12345']];
	test.each(errorNameMock)('자동차 이름 길이 테스트', input => {
		// Arrange
		const carList = new CarList();

		// Act & Assert
		expect(() => carList.validateNameLength(input)).toThrow('[ERROR]');
	});

	test.each(errorNameMock)('자동차 개수 길이 테스트', input => {
		// Arrange
		const carList = new CarList();

		// Act & Assert
		expect(() => carList.validateCarNumber(input)).toThrow('[ERROR]');
	});
});
