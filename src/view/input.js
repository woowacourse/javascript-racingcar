import readLineAsync from "../readLineAsync.js";
import Car from "../Car.js";

const carNameInput = async () => {
  try {
    const carList = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );

    const car = new Car(carList.split(","));

    return car.getCarList();
  } catch (error) {
    console.log(error);
    carNameInput();
  }
};

const tryInput = async () => {
  try {
    const tryNumber = await readLineAsync("시도할 횟수는 몇번인가요?\n");

    return tryNumber;
  } catch (error) {
    console.log(error);
    tryInput();
  }
};

export { carNameInput, tryInput };
