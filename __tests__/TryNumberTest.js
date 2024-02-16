import TryNumber from '../src/Domain/TryNumber.js';

describe('시도할 횟수 도메인 테스트', () => {
	// Arrange
	test.each([[''], [' ']])('공백이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => new TryNumber(input)).toThrow('[ERROR]');
	});
	test.each([-1, -2])('음수이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => new TryNumber(input)).toThrow('[ERROR]');
	});
	test.each([0])('0이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => new TryNumber(input)).toThrow('[ERROR]');
	});
	test.each(['1.2'])('소수이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => new TryNumber(input)).toThrow('[ERROR]');
	});
	test.each(['hi'])('string이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => new TryNumber(input)).toThrow('[ERROR]');
	});
});
