export function showWinners(winners) {
  const resultContainer = document.querySelector('.game-result-container');
  resultContainer.insertAdjacentHTML('beforeend', `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`);
}

export function resetView() {
  const nameInput = document.body.querySelector('.name-input');
  const countForm = document.body.querySelector('.count-form');
  const countInput = countForm.children[1].firstChild;
  const result = document.body.querySelector('.result');
  const resultContainer = result.children[0];
  const restart = result.children[1];

  nameInput.value = '';
  countInput.value = '';
  countForm.style.display = 'none';
  resultContainer.innerHTML = '';
  restart.style.display = 'none';
}

export function showRestart() {
  document.querySelector('.restart-container').style.display = 'flex';
}

function getPositionArrow(car) {
  return new Array(car.position)
    .fill('')
    .map(() => '<div class="result-arrow">⬇️️</div>')
    .join('');
}

function getTemplateRaceResult(cars) {
  return cars
    .map(car => {
      return `<div class="result-car-wrapper">
                  <div class="result-car-name">${car.name}</div>
                  <div class="result-arrow-container">${getPositionArrow(car)}</div> 
                </div>`;
    })
    .join('');
}

export default function showResult(cars) {
  const resultContainer = document.querySelector('.game-result-container');
  const div = document.createElement('div');

  div.className = 'race-result-container';
  div.innerHTML = getTemplateRaceResult(cars);
  resultContainer.append(div);
}
