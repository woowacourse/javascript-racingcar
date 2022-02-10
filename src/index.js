class RacingCar {
  constructor() {
    this.init();
  }

  init() {
    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$carNamesForm = document.getElementById('car_names_form');
    this.$carNamesInput = document.getElementById('car_names_input');
  }

  initEventListener() {
    this.$carNamesForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const carNames = this.$carNamesInput.value;

      if (carNames === '') {
        alert('자동차 이름은 최소 1개 이상 입력해야 한다.');
        return;
      }

      const carNamesArray = carNames.split(',').map((carName) => carName.trim());

      if (carNamesArray.some((carName) => carName.length > 5)) {
        alert('자동차 이름의 길이는 5 이하로만 입력해야 한다.');
        return;
      }

      if (carNamesArray.some((carName) => carName.length === 0)) {
        alert('자동차 이름은 공백이면 안된다.');
        return;
      }
    });
  }
}

new RacingCar();
