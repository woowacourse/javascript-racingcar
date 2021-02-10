import Car from './models/Car.js';
export default class Racing {
  constructor() {
    this.cars = [];
    this.tryCount = 0;

    this.resetUI();
    this.addListeners();
  }

  resetUI() {
    document.querySelector('.try-count-form').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
  }

  getCarNames() {
    const carNameInput = document.querySelector('.car-name').value;
    if (!carNameInput) {
      alert('자동차 이름을 입력해주세요.');
      return;
    }
    for (let name of carNameInput.split(',')) {
      if (name.trim().length > 5) {
        alert('자동차 이름을 5자 이하로 입력해 주세요.');
        return;
      }
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    document.querySelector('.try-count-form').style.display = 'block';
  }

  getTryCount() {
    const tryCountInput = document.querySelector('.try-count').value;
    const tryCountNumber = Number(tryCountInput);
    if (!tryCountInput) {
      alert('시도 횟수를 입력해주세요.');
      return;
    } else if (tryCountNumber <= 0) {
      alert('양수를 입력해주세요.');
      return;
    } else if (tryCountNumber !== Math.floor(tryCountNumber)) {
      alert('정수를 입력해주세요.');
      return;
    }
    this.tryCount = tryCountNumber;
    this.moveCars();
  }

  moveCars() {
    for (let i = 0; i < this.tryCount; i++) {
      for (let car of this.cars) {
        car.move();
      }
    }
    this.showProgress();
  }

  showProgress() {
    document.querySelector('.progress-container').style.display = '';

    document.querySelector('.progress-cars').innerHTML = this.cars
      .map(
        car => `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.position)}
        </div>
      `,
      )
      .join('');

    this.showWinners();
  }

  showWinners() {
    document.querySelector('.result-container').style.display = '';
    const winners = this.getWinners();

    document.querySelector('.result-container').innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
          <button type="button" class="btn btn-cyan">다시 시작하기</button>
        </div>
      </section>
    `;
  }

  getWinners() {
    let maxPosition = 0;
    const winners = this.cars.reduce((winners, car) => {
      if (car.position === maxPosition) {
        winners.push(car.name);
      } else if (car.position > maxPosition) {
        winners = [car.name];
        maxPosition = car.position;
      }
      return winners;
    }, []);

    return winners;
  }

  addListeners() {
    document
      .querySelector('.car-name-btn')
      .addEventListener('click', this.getCarNames.bind(this));
    document
      .querySelector('.try-count-btn')
      .addEventListener('click', this.getTryCount.bind(this));
  }
}

new Racing();
