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
