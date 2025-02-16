import Winner from '../../src/domains/Winner.js';

describe('우승자 클래스 테스트', () => {
  describe('정상 케이스', () => {
    let winner;

    beforeEach(() => {
      winner = new Winner();
    });

    test('우승자 객체를 생성할 수 있다.', () => {
      expect(winner).not.toBeUndefined();
    });

    test('우승자가 한 명일 수 있다.', () => {
      const carList = [
        { name: '목성이', position: 2 },
        { name: '수성이', position: 3 },
        { name: '화성이', position: 1 },
      ];
      const maxPosition = 3;
      const winners = winner.getWinners(carList, maxPosition);

      expect(winners).toEqual(['수성이']);
      expect(winners).toHaveLength(1);
    });

    test('우승자가 한 명 이상일 수 있다.', () => {
      const carList = [
        { name: '목성이', position: 3 },
        { name: '수성이', position: 3 },
        { name: '화성이', position: 1 },
      ];

      const maxPosition = 3;
      const winners = winner.getWinners(carList, maxPosition);
      expect(winners).toContain('목성이');
      expect(winners).toContain('수성이');
      expect(winners).toHaveLength(2);
    });

    test('최대 위치가 0이면 모두 우승자가 된다.', () => {
      const carList = [
        { name: '목성이', position: 0 },
        { name: '수성이', position: 0 },
        { name: '화성이', position: 0 },
      ];

      const maxPosition = 0;
      const winners = winner.getWinners(carList, maxPosition);

      expect(winners).toContain('목성이');
      expect(winners).toContain('수성이');
      expect(winners).toContain('화성이');
      expect(winners).toHaveLength(3);
    });
  });
});
