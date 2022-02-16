import { getElement } from "./utils/dom.js";

const carsNameView = (cars) => {
  return cars.map(({name}) =>
    `<div id="car-status-${name}" class="car-status" data-name=${name}>
      <div id="car-name" class="car-name">${name}</div>
    </div>`
  ).join('');
};

const loadingView = (cars) => {
  cars.forEach((car)=>{
    getElement(`car-status-${car.name}`).insertAdjacentHTML('beforeend', '<div class="loader"></div>')
  })
}

const carMovementView = () => `<div id="move" class="move">⬇️</div>`;

const winnersView = (winners) => `<h3>🏆최종 우승자: ${winners}🏆</h3>`;

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
} 

const clearLoadingView = (cars) => {
  cars.forEach((car)=>{
    const parent = getElement(`car-status-${car.name}`)
    if(parent.children.length > 1) {parent.removeChild(parent.lastChild)}
  })
}

export { carsNameView, carMovementView, loadingView, winnersView, clearLoadingView, removeAllChildNodes };
