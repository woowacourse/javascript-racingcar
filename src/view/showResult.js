function getPositionArrow(car) {
  return `<div class="result-arrow">⬇️️</div>`.repeat(car.position);
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
