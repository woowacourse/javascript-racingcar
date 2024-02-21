import Car from '../Car';
import RaceResult from '../RaceResult';

describe('RaceResult 테스트', () => {
  test('pushCar에 Car가 아닌 값이 들어가면 예외처리된다.', () => {
    //Arrage
    const raceResult = new RaceResult();
    const notCar = {};

    //Assert
    expect(
      //Act
      () => raceResult.pushCar(notCar)
    ).toThrow();
  });

  test('가장 멀리간 Car의 name이 담긴 배열을 반환한다.', () => {
    //Arrage
    const cars = [new Car('a'), new Car('b'), new Car('c'), new Car('d')];
    const carPostion = [3, 5, 1, 5];
    cars.forEach((car, index) => car.grantTry(carPostion[index]));
    const expectWinner = ['b', 'd'];

    const raceResult = new RaceResult();
    cars.forEach(car => raceResult.pushCar(car));

    //Act
    const winnersNames = raceResult.getWinnersNames();

    //Assert
    expect(winnersNames).toEqual(expectWinner);
  });
});
