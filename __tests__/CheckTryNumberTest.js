import tryNumber from '../src/Domain/CheckTrynumber.js';

describe('시도할 횟수 도메인 테스트', () => {
	// Arrange
	const inputs = [[1.2], ['one'], [''], [0]];
	test.each(inputs)('무효한 숫자시 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => tryNumber.check(input)).toThrow('[ERROR]');
	});
});

describe('시도할 횟수 유닛 테스트', () => {
	test('시도할 횟수가 정수가 아니면 에러를 낸다', () => {
		// Arrange
		const input = 1.2;

		// Act & Assert
		expect(() => tryNumber.integer(input)).toThrow('[ERROR]');
	});

	test('시도할 횟수가 숫자가 아니면 에러를 낸다', () => {
		// Arrange
		const input = 'one';

		// Act & Assert
		expect(() => tryNumber.notANum(input)).toThrow('[ERROR]');
	});

	test('시도할 횟수가 빈 값이면 에러를 낸다', () => {
		// Arrange
		const input = '';

		// Act & Assert
		expect(() => tryNumber.empty(input)).toThrow('[ERROR]');
	});

	test('시도할 횟수가 0 이하이면 에러를 낸다', () => {
		// Arrange
		const input = 0;

		// Act & Assert
		expect(() => tryNumber.less(input)).toThrow('[ERROR]');
	});
});
