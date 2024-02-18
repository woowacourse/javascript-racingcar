import Car from '../../src/domain/Car';

describe('Car Test', () => {
  test('move - 2번 움직이고 2번 정지한다', () => {
    // given
    const MOVE = true;
    const STOP = false;
    const CAN_MOVE_CASES = [MOVE, MOVE, STOP, STOP];

    // when
    const car = new Car('pobi');
    CAN_MOVE_CASES.forEach(canMove => car.move(canMove));

    // then
    expect(car.position).toBe(2);
  });
});
