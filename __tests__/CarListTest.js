import CarList from '../src/Domain/CarList.js';
import carListValidate from '../src/Validator/CarListValidator.js';

describe('자동차 리스트 기능 테스트', () => {
	test('자동차가 잘 움직이는지 확인한다.', () => {
		const carList = new CarList(['리안', '시모']);

		carList.move(1);
		carList.move(0);
		carList.move(1);

		expect(carList.getDistance()).toEqual([1, 2]);
	});
});

describe('자동차 리스트 이름 유효성 검사 테스트', () => {
	test('자동차 이름이 6자 이상이면 에러를 낸다', () => {
		// Arrange
		const input = ['123456', '리안'];

		// Act & Assert
		expect(() => carListValidate.validate(input)).toThrow('[ERROR]');
	});
	test('자동차 이름이 빈값이면 에러를 낸다', () => {
		// Arrange
		const input = ['', '리안', '시모'];

		// Act & Assert
		expect(() => carListValidate.validate(input)).toThrow('[ERROR]');
	});
	test('자동차 개수가 1개 이하이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모'];

		// Act & Assert
		expect(() => carListValidate.validate(input)).toThrow('[ERROR]');
	});
	test('자동차 개수가 1개 미만이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모', '리안', '제이드', '에프이', '마루', '리안'];

		// Act & Assert
		expect(() => carListValidate.validate(input)).toThrow('[ERROR]');
	});
});
