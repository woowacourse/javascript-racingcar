import CarList from '../src/Domain/CarList.js';

describe('자동차 도메인 테스트', () => {
	test('자동차 이름이 6자 이상이면 에러를 낸다', () => {
		// Arrange
		const input = ['123456', '리안'];

		// Act & Assert
		expect(() => new CarList(input)).toThrow('[ERROR]');
	});
	test('자동차 이름이 빈값이면 에러를 낸다', () => {
		// Arrange
		const input = ['', '리안', '시모'];

		// Act & Assert
		expect(() => new CarList(input)).toThrow('[ERROR]');
	});
	test('자동차 개수가 1개 이하이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모'];

		// Act & Assert
		expect(() => new CarList(input)).toThrow('[ERROR]');
	});
	test('자동차 개수가 1개 미만이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모', '리안', '제이드', '에프이', '마루', '리안'];

		// Act & Assert
		expect(() => new CarList(input)).toThrow('[ERROR]');
	});
});
