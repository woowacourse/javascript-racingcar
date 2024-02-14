import Car from './Car';
import readLineAsync from './utils/readLineAsync';

class App {
  async play() {
    const carList = await this.#getCarList();
    const turnCount = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    for (let i = 0; i < turnCount; i += 1) {
      carList.forEach((car) => {
        car.move();
      });
    }
  }

  async #getCarList() {
    const carList = await readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n');
    return carList.split(',').map((carName) => new Car(carName));
  }
}

const app = new App();
app.play();
