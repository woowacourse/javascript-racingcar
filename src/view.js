import { ID } from "./constants.js";
import { getElement } from "./utils/dom.js";

const loadingView = '<div class="loader"></div>';

const carsNameView = (cars) => {
  return cars.map(({name}) =>
    `<div id="car-status-${name}" class="car-status" data-name=${name}>
      <div id="car-name" class="car-name">${name}</div>
    </div>`
  ).join('');
};

const loaderView = (cars) => {
  cars.forEach((car)=>{
    getElement(`car-status-${car.name}`).insertAdjacentHTML('beforeend', loadingView)
  })
}

const carMovementView = () => {
  const moveDiv = document.createElement("div");
  moveDiv.textContent = '⬇️';
  moveDiv.className = 'move';
  return moveDiv;
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}; 

const clearLoadingView = (cars) => {
  cars.forEach((car)=>{
    const parent = getElement(`car-status-${car.name}`)
    if(parent.lastChild.className === "loader") {parent.removeChild(parent.lastChild)}
  })
};

const resultView = (winners) =>  { 
  getElement(ID.RACING_WINNERS).insertAdjacentHTML('afterbegin', winnersView(winners));
  getElement(ID.RESTART_BUTTON).style.visibility="visible";
}

const winnerAlert = (winners) => alert(`🎉우승을 축하합니다 ${winners}🎉`);

const winnersView = (winners) => `<h3 id="winners">🏆최종 우승자: ${winners}🏆</h3>`;

const initRacingStatus = (cars) => {
  getElement(ID.RACING_STATUS).insertAdjacentHTML('beforeend', carsNameView(cars));
  loaderView(cars)
};

export { carMovementView, clearLoadingView, removeAllChildNodes, resultView, initRacingStatus, winnerAlert, loaderView, loadingView };
