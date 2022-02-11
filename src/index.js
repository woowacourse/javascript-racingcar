import Car from './Car.js';

class CarRacing {
  constructor() {
    this.participants = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    document.querySelector('#app').addEventListener('click', ({ target }) => {
      const targetId = target.id;
      const buttonIds = {
        'car-names-submit': () => {
          this.onSubmitCarName(
            document.querySelector('#car-names-input').value,
          );
        },
        'racing-count-submit': () => {
          this.onSubmitRacingCount(
            document.querySelector('#racing-count-input').value,
          );
        },
        'restart-button': () => {
          this.onClickRestart();
        },
      };
      if (!buttonIds[targetId]) return;
      buttonIds[targetId]();
    });
  }

  onSubmitCarName(names) {
    if (this.participants.length) {
      return alert('이름 재입력이 불가능합니다');
    }
    const carNames = this.parseCarName(names);
    if (!this.validateCarNameLength(carNames)) {
      return alert('1~5자의 자동차 이름을 입력해 주세요.');
    }
    if (!this.validateDuplicateCarName(carNames)) {
      return alert('중복된 자동차 이름은 입력이 불가능합니다.');
    }
    this.participants = carNames.map(name => new Car(name));
  }

  onSubmitRacingCount(count) {
    if (this.winners.length) return alert('레이싱 횟수 재입력이 불가능합니다.');
    if (!this.participants.length)
      return alert('자동차 이름이 입력되지 않았습니다.');
    if (!this.validateRacingCount(count))
      return alert('올바르지 않은 레이싱 횟수입니다');
    this.participants.map(car => {
      for (let i = 0; i < count; i++) {
        car.move();
      }
    });
    document.querySelector('#racing-status').innerHTML = this.printResult();
    document.querySelector('#racing-winners').innerHTML = this.printWinner(
      this.getWinner(),
    );
  }

  onClickRestart() {
    document.querySelector('#car-names-input').value = '';
    document.querySelector('#racing-count-input').value = '';
    document.querySelector('#racing-winners').innerHTML = '';
    document.querySelector('#racing-status').innerHTML = '';
    this.participants = [];
    this.winners = [];
  }

  printResult() {
    return this.participants
      .map(
        participant =>
          `<div id="user-status" class="user-status" data-name=${
            participant.name
          }>
        <div id="user-name" class="user-name">${participant.name}</div>
        ${Array.from({ length: participant.racingCount }, () => 0)
          .map(count => `<div id="move" class="move">⬇️</div>`)
          .join('')}
      </div>`,
      )
      .join('');
  }

  printWinner(winners) {
    return `<h3>🏆최종 우승자: ${winners
      .map(({ name }) => name)
      .join(',')}🏆</h3>`;
  }

  getWinner() {
    let maxCount = 0;
    for (let i = 0; i < this.participants.length; i++) {
      if (this.participants[i].racingCount >= maxCount) {
        maxCount = this.participants[i].racingCount;
      }
    }
    return (this.winners = this.participants.filter(
      participant => participant.racingCount === maxCount,
    ));
  }

  parseCarName(names) {
    return names.split(',').map(name => name.trim());
  }
  validateCarNameLength(names) {
    return names.every(name => name.length <= 5 && name.length > 0);
  }

  validateDuplicateCarName(names) {
    return new Set(names).size === names.length;
  }

  validateRacingCount(count) {
    return count > 0;
  }
}

const carRacing = new CarRacing();
