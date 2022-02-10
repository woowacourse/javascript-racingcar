function getPositionArrow(car) {
  let template = '';

  for (let i = 0; i < car.position; i += 1) {
    template += `<div class="result-arrow">⬇️️</div>`;
  }
  return template;
}

function getTemplateRaceResult(cars) {
  let template = '';

  cars.forEach(car => {
    template += ` 
      <div class="result-car-wrapper">
        <div class="result-car-name">${car.name}</div>
        <div class="result-arrow-container">${getPositionArrow(car)}</div> 
      </div>
    `;
  });

  return template;
}

export default function showResult(cars) {
  const resultContainer = document.querySelector('.game-result-container');
  const div = document.createElement('div');

  div.className = 'race-result-container';
  div.innerHTML = getTemplateRaceResult(cars);
  resultContainer.append(div);
}
