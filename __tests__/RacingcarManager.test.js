import Car from '../src/domain/Car';
import RacingcarManager from "../src/domain/RacingcarManager";

test('경주에 참여할 자동차 cars 객체 배열이 생성된다.', ()=>{
    const racingcarManager = new RacingcarManager();
    
    const carNames = ["car1", "car2", "car3"];

    const cars = racingcarManager.createCars(carNames);
    cars.forEach(car => {
      expect(car).toBeDefined();
    })
});

test('[최종 우승자 구하기]: 최종 우승자가 1명인 경우.', ()=>{
    const racingcarManager = new RacingcarManager();
    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const car3 = new Car("car3");

    car1.position = 6;
    car2.position = 3;
    car3.position = 1;
 
    const cars = [car1, car2, car3];
    const winners = racingcarManager.getWinners(cars);

    expect(winners).toEqual(['car1']);
});

test('[최종 우승자 구하기]: 최종 우승자가 2명 이상인 경우.', ()=>{
  const racingcarManager = new RacingcarManager();
  const car1 = new Car("car1");
  const car2 = new Car("car2");
  const car3 = new Car("car3");

  car1.position = 6;
  car2.position = 6;
  car3.position = 1;

  const cars = [car1, car2, car3];
  const winners = racingcarManager.getWinners(cars);

  expect(winners).toEqual(['car1', 'car2']);
});