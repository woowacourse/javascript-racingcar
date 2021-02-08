export default function RacingCar() {
  const carNames = [];

  const resetUI = () => {
    document.querySelector('.try-count-form').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'none';
  };

  const getCarNames = () => {
    const carNameInput = document.querySelector('.car-name').value;

    for (let name of carNameInput.split(',')) {
      if (name.trim().length > 5) {
        alert('자동차 이름을 5자 이하로 입력해 주세요.');
        return;
      }
      carNames.push(name.trim());
    }

    document.querySelector('.try-count-form').style.display = 'block';
  };

  const addListeners = () => {
    document
      .querySelector('.car-name-btn')
      .addEventListener('click', getCarNames);
  };

  const run = () => {
    addListeners();
    resetUI();
  };

  run();
}

new RacingCar();
