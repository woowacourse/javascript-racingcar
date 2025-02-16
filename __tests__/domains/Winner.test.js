import Winner from '../../src/domains/Winner.js';

describe('자동차 리스트 클래스 테스트', () => {
  describe('자동차 리스트 클래스 정상 케이스', () => {
    const names = ['목성이', '화성이', '금성이'];
    let winner;

    test('우승자 객체를 생성할 수 있다.', () => {
      expect(winner).not.toBeUndefined();
    });

    beforeEach(() => {
      winner = new Winner(names);
    });

    test('우승자가 한 명일 수 있다.', () => {
      const carList = [];

      const raceData = [
        {
          name: '목성이',
          position: 2,
        },
        {
          name: '수성이',
          position: 3,
        },
      ];

      raceData.forEach((data) => carList.push(data));

      const winners = winner.getWinners(carList, 3);
      expect(winners).toEqual(['수성이']);
      expect(winners.length).toBe(1);
    });

    test('우승자가 한 명 이상일 수 있다.', () => {
      const carList = [];

      const raceData = [
        {
          name: '목성이1',
          position: 3,
        },
        {
          name: '수성이1',
          position: 3,
        },
      ];

      raceData.forEach((data) => carList.push(data));

      const winners = winner.getWinners(carList, 3);
      expect(winners.length).toBe(2);
    });
  });
});
