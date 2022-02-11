import Car from './Car.js';
import { ID, MESSAGE } from './constants.js';
import { getElement } from './utils/dom.js';

class CarRacing {
  constructor() {
    this.participants = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.INPUT_FORMS).addEventListener('keyup', event => {
      if (event.key !== 'Enter') return;
      if (document.activeElement.id === ID.CAR_COUNTS_INPUT) {
        this.onSubmitCarName(getElement(ID.CAR_NAMES_INPUT).value);
        return;
      }
      this.onSubmitRacingCount(getElement(ID.RACING_COUNT_INPUT).value);
    });

    getElement(ID.APP).addEventListener('click', ({ target }) => {
      const targetId = target.id;
      const buttonIds = {
        [ID.CAR_NAMES_SUBMIT]: () => {
          this.onSubmitCarName(getElement(ID.CAR_NAMES_INPUT).value);
        },
        [ID.RACING_COUNT_SUBMIT]: () => {
          this.onSubmitRacingCount(getElement(ID.RACING_COUNT_INPUT).value);
        },
        [ID.RESTART_BUTTON]: () => {
          this.onClickRestart();
        },
      };
      if (!buttonIds[targetId]) return;
      buttonIds[targetId]();
    });
  }

  onSubmitCarName(names) {
    if (this.participants.length) {
      return alert(MESSAGE.REINPUT_NAME);
    }
    const carNames = this.parseCarName(names);
    if (!this.validateCarNameLength(carNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!this.validateDuplicateCarName(carNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    this.participants = carNames.map(name => new Car(name));
  }

  onSubmitRacingCount(count) {
    if (this.winners.length) return alert(MESSAGE.REINPUT_COUNT);
    if (!this.participants.length) return alert(MESSAGE.NO_CAR);
    if (!this.validateRacingCount(count)) return alert(MESSAGE.WRONG_COUNT);
    this.participants.map(car => {
      for (let i = 0; i < count; i++) {
        car.move();
      }
    });
    getElement(ID.RACING_STATUS).innerHTML = this.printResult();
    getElement(ID.RACING_WINNERS).innerHTML = this.printWinner(
      this.getWinner(),
    );
  }

  onClickRestart() {
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    getElement(ID.RACING_WINNERS).innerHTML = '';
    getElement(ID.RACING_STATUS).innerHTML = '';
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
