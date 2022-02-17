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

function getCarsNameTemplate(cars) {
  return cars
    .map(car => {
      return `<div class="result-car-wrapper">
                <div class="result-car-name">${car.name}</div>
              </div>`;
    })
    .join('');
}

// async function showSpinner() {
//   const wrapper = document.querySelector('.result-car-wrapper');
//   const startTime = new Date().getTime();
//   console.log('spinner...');

//   const callback = function () {
//     const currentTime = new Date().getTime();
//     if (currentTime - 1000 < startTime) {
//       console.log('hi');
//       requestAnimationFrame(callback);
//     }
//   };
//   requestAnimationFrame(callback);
// }

function showOneGo(index) {
  const wrapper = document.querySelectorAll('.result-car-wrapper');
  wrapper[index].insertAdjacentHTML('beforeend', '<div class="result-arrow">⬇️️</div>');
}

function showRaceProgress(cars, count) {
  new Array(+count).fill(0).forEach((value, index) => {
    cars.forEach(car => {
      // showSpinner();
      if (car.position > index) {
        showOneGo(index);
      }
    });
  });
}

export default function showResult(cars, count) {
  const resultContainer = document.querySelector('.game-result-container');
  const div = document.createElement('div');

  div.className = 'race-result-container';
  div.innerHTML = getCarsNameTemplate(cars);
  resultContainer.append(div);
  showRaceProgress(cars, count);
}
