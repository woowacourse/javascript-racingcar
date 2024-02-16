import TryNumber from '../src/Domain/TryNumber.js';

describe.skip('시도할 횟수 도메인 테스트', () => {
	// Arrange
	const inputs = [['one'], [0], [-1]];
	test.each(inputs)('무효한 숫자시 에러를 내는지 검사한다.', input => {
		const tryNumber = new TryNumber();
		// Act & Assert
		expect(() => tryNumber.validate(input)).toThrow('[ERROR]');
	});
});
