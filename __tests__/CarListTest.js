import CarList from '../src/Model/CarList.js';

describe('자동차 도메인 테스트', () => {
	test('자동차 이름 길이 테스트', () => {
		//Arrange
		const carList = new CarList();

		const oup = ['12345', '시모,리안,에프이제이든'];
		//Act
		carList
			//Assert
			.expect()
			.toThrow();
	});

	test('빈값인지 테스트', () => {
		expect().toThrow();
	});
});
