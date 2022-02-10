import { Car } from '../models/Car.js';

export function race(state) {
  state.cars = state.cars.map((item) => {
    return new Car(item);
  });

  //carclass arr 순환하면서 moveforward
  for (let i = 0; i < state.racingNumber; i++) {
    goForward(state);
  }
  console.log(state.cars);
}

function goForward(state) {
  for (let i = 0; i < state.cars.length; i++) {
    state.cars[i].moveFoward();
  }
}

// 플레이별로 난수 생성하는거 util -> pass
// 난수 4이상 판별 util
// Car 연결해서 set location controller
