import tryNumberValidate from '../src/Validator/TryNumberValidator.js';

describe('경기 시도 횟수 도메인 테스트', () => {
	// Arrange
	test.each([[''], [' ']])('공백이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => tryNumberValidate.validate(input)).toThrow('[ERROR]');
	});
	test.each([-1, -2])('음수이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => tryNumberValidate.validate(input)).toThrow('[ERROR]');
	});
	test.each([1.2, -2.4])('소수이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => tryNumberValidate.validate()).toThrow('[ERROR]');
	});
	test.each(['hi', 'two'])('string이면 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => tryNumberValidate.validate(input)).toThrow('[ERROR]');
	});
	test('0이면 에러를 내는지 검사한다.', () => {
		// Arrange
		const input = 0;
		// Act & Assert
		expect(() => tryNumberValidate.validate(input)).toThrow('[ERROR]');
	});
});
