import { CAR_CONSTANTS } from '../../src/constanst';
import Car from '../../src/domain/car';

describe('Car 객체 테스트', () => {
  let car;

  const { MIN_MOVE_THRESHOLD, MOVE_DISTANCE, INITIAL_DISTANCE } = CAR_CONSTANTS;

  beforeEach(() => {
    car = new Car('러기');
  });

  describe(`랜덤 숫자가 ${MIN_MOVE_THRESHOLD}이상이면 ${MOVE_DISTANCE}칸 전진해야한다.`, () => {
    test.each([[MIN_MOVE_THRESHOLD]])(`엣지) 랜덤 숫자가 %d일 때 Car는 ${MOVE_DISTANCE}칸 전진해야한다.`, (num) => {
      car.move(num);
      expect(car.getInfo().distance).toBe(MOVE_DISTANCE);
    });

    test.each([[MIN_MOVE_THRESHOLD - 1]])(`랜덤 숫자가 %d보다 작을 때 Car는 전진하지 않아야한다.`, (num) => {
      car.move(num);
      expect(car.getInfo().distance).toBe(INITIAL_DISTANCE);
    });
  });

  describe('최대 거리 이동 차량이 우승자로 판별되어야 한다.', () => {
    let car1, car2;

    const simulateCarMovement = ({ car, distance }) => {
      Array.from({ length: distance }, () => {
        car.move(MIN_MOVE_THRESHOLD);
      });
    };

    beforeEach(() => {
      car1 = new Car('해린');
      car2 = new Car('다니엘');
    });

    afterEach(() => {
      Car.maxDistance = INITIAL_DISTANCE;
    });

    test.each([
      [2, 5, false],
      [10, 7, true],
    ])('car1의 %d칸, car2가 %d칸 이동했을 때, car1이 우승자인가? %s', (distance1, distance2, isWinner) => {
      simulateCarMovement({ car: car1, distance: distance1 });
      simulateCarMovement({ car: car2, distance: distance2 });

      expect(car1.isWinner()).toBe(isWinner);
    });

    test.each([[3]])('car1,car2가 둘 다 %d만큼 움직였다면 공동 우승자이다.', (distance) => {
      simulateCarMovement({ car: car1, distance });
      simulateCarMovement({ car: car2, distance });

      expect(car1.isWinner()).toBeTruthy();
      expect(car2.isWinner()).toBeTruthy();
    });
  });
});
