import $ from '../util/dom.js';

function getRaceResultTemplate(cars) {
  let template = '';

  cars.forEach(car => {
    template += ` 
      <div class="result-car-wrapper">
        <div class="result-car-name">${car.name}</div>
        <div class="result-arrow-container"></div>
        <div class="spinner"><img src="./src/util/img/loading.png" alt=""></div> 
      </div>
    `;
  });
  return template;
}

export default function addGameProcessTemplate(cars) {
  const div = document.createElement('div');

  div.className = 'race-result-container';
  div.innerHTML = getRaceResultTemplate(cars);
  $('.game-result-container').append(div);
}
