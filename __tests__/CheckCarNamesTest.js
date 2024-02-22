import carNames from '../src/Domain/CheckCarNames.js';

describe('자동차 이름 도메인 테스트', () => {
	// Arrange
	const inputs = [
		[['12345', '시모']],
		[['', '시모']],
		[['시모']],
		[['시모', '리안', '시모', '제이드', '에프이']],
	];
	test.each(inputs)('무효한 이름 입력시 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => carNames.check(input)).toThrow('[ERROR]');
	});
});

describe('자동차 이름 유닛 테스트', () => {
	test('자동차 이름이 5자 이상이면 에러를 낸다', () => {
		// Arrange
		const input = '12345';

		// Act & Assert
		expect(() => carNames.nameLenMore(input)).toThrow('[ERROR]');
	});

	test('자동차 이름 빈값이면 에러를 낸다', () => {
		// Arrange
		const input = '';

		// Act & Assert
		expect(() => carNames.nameLenLess(input)).toThrow('[ERROR]');
	});

	test('자동차 개수가 1개 미만이면 에러를 낸다.', () => {
		// Arrange
		const input = ['시모'];

		// Act & Assert
		expect(() => carNames.nameArrLen(input)).toThrow('[ERROR]');
	});

	test('자동차 중복이면 에러를 낸다.', () => {
		//Arrange
		const input = ['시모', '리안', '시모', '제이드', '에프이'];

		//Act & Assert
		expect(() => carNames.duplicateName(input)).toThrow('[ERROR]');
	});
});
