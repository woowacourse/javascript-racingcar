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
    });
  }
}

new RacingCar();
