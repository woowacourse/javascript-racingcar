import { validateTryNumber } from '../src/Utils/validate.js';

describe('시도할 횟수 도메인 테스트', () => {
	// Arrange
	const inputs = [['one'], [0], [-1]];
	test.each(inputs)('무효한 숫자시 에러를 내는지 검사한다.', input => {
		// Act & Assert
		expect(() => validateTryNumber.validate(input)).toThrow('[ERROR]');
	});
});
