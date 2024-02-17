import Winner from '../src/Domain/Winner';

describe('우승자 테스트', () => {
	test('결과값에 따른 공동 우승자가 잘 반환되는지 확인', () => {
		//Arrange
		const names = ['리안', '시모'];
		const distance = [2, 2];
		const winner = new Winner(names, distance);

		//Arrange
		// Act & Assert
		expect(winner.decideWinner()).toEqual(['리안', '시모']);
	});
	test('결과값에 따른 우승자 인덱스가 잘 반환되는지 확인', () => {
		//Arrange
		const names = ['리안', '시모'];
		const distance = [1, 2];
		const winner = new Winner(names, distance);

		// Act & Assert
		expect(winner.decideWinner()).toEqual(['시모']);
	});
});
