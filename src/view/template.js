export const getRacingCarItemTemplate = (carName) =>
  `
    <div class="racing_car_item">
      <div class="racing_car_name">${carName}</div>
      <ul class="racing_car_progress">
        <div class="loading"></div>
      </ul>
    </div>
  `;

export const getCongratulationTemplate = (winner) =>
  `자동차 경주 게임이 끝났습니다. ${winner} 우승을 축하드립니다.🎉🎉🎉`;

export const PROGRESS_TEMPLATE = '<li>⬇</li>';
