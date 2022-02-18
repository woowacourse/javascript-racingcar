export default class TEMPLATE {
  ADVANCE_MARK() {
    return '<div class="car-advance">⬇️️</div>';
  }

  LOADING_MARK() {
    return '<div class="round-loading"><img src="./src/asset/loading.png" class="spinner" alt="loading"></div>';
  }

  CAR_NAME_BOX(carName) {
    return `<div id="${carName}" class="car-instance"><div class="car-name-box">${carName}</div></div>`;
  }

  WINNER_DISPLAY(winner) {
    return `🏆 최종 우승자: ${winner} 🏆`;
  }
}
