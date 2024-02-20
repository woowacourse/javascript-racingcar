import Winner from '../src/Domain/Winner';

describe('우승자 도메인 테스트', () => {
	test('최종 거리가 같을 때 공동 우승자 인덱스가 잘 반환되는지 확인', () => {
		//Arrange
		const names = ['리안', '시모'];
		const distance = [2, 2];
		const winner = new Winner(names, distance);

		//Arrange
		// Act & Assert
		expect(winner.decideWinnerIndex()).toEqual([0, 1]);
	});
	test('최종 거리에서 가장 높은 사람이 우승자 인덱스가 잘 반환되는지 확인', () => {
		//Arrange
		const names = ['리안', '시모'];
		const distance = [1, 2];
		const winner = new Winner(names, distance);

		// Act & Assert
		expect(winner.decideWinnerIndex()).toEqual([1]);
	});
	test('우승자를 잘 선택하고 이름을 잘 출력하는지 확인', () => {
		const names = ['리안', '시모'];
		const distance = [2, 2];
		const winner = new Winner(names, distance);

		// Act & Assert
		expect(winner.decideWinnerAndReturnNames()).toEqual(['리안', '시모']);
	});
});
