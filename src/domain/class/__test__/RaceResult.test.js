import Car from '../Car';
import RaceResult from '../RaceResult';

describe('RaceResult 테스트', () => {
  test('pushCar에 Car가 아닌 값이 들어가면 에러', () => {
    //Arrage
    const raceResult = new RaceResult();
    const notCar = {};

    //Assert
    expect(
      //Act
      () => raceResult.pushCar(notCar)
    ).toThrow();
  });

  test('WinnersNames를 제대로 가져오는지 확인', () => {
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
