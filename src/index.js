import { readLineAsync } from "./Util.js";
import Validate from "./Validate.js";
import Car from "./Car.js";
import Output from "./Output.js";
import Input from "./Input.js";

// 입출력 예시
async function run() {
  const input = new Input();
  const names = await input.raceCarNames();

  //TODO: 자동차 이름 길이를 검증하는 코드 필요
  const cars = names.map((carName) => new Car(carName));
  const output = new Output();
  // const validate = new Validate();

  const count = await input.raceCount();

  console.log("\n실행 결과");
  for (let i = 0; i < count; i++) {
    cars.forEach((car) => {
      car.tryMove();
      output.printCarPosition(car);
    });
    console.log();
  }

  let maxNum = 0;
  let carList = [];

  cars.forEach((car) => {
    if (car.position > maxNum) {
      maxNum = car.position;
      carList = [car.name];
    } else if (car.position === maxNum) {
      carList.push(car.name);
    }
    return;
  });

  console.log(`최종 우승자: ${carList.join(", ")}`);
}

run();
