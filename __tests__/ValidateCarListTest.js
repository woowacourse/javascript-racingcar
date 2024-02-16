import { validateCarList } from '../src/Utils/validate.js';

describe('자동차 도메인 테스트', () => {
	test('자동차 이름이 5자 이상이면 에러를 낸다', () => {
		// Arrange
		const input = '12345';

		// Act & Assert
		expect(() => validateCarList.validateNameLength(input)).toThrow('[ERROR]');
	});

	test('자동차 이름 빈값이면 에러를 낸다', () => {
		// Arrange
		const input = '';

		// Act & Assert
		expect(() => validateCarList.validateEmpty(input)).toThrow('[ERROR]');
	});

	test('자동차 개수가 1개 미만이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모'];

		// Act & Assert
		expect(() => validateCarList.validateCarNumber(input)).toThrow('[ERROR]');
	});

	test('자동차 중복이면 에러를 낸다.', () => {
		//Arrange
		const input = ['시모', '리안', '시모', '제이드', '에프이'];

		//Act & Assert
		expect(() => validateCarList.validateDuplicate(input)).toThrow('[ERROR]');
	});
});
