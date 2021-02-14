export const CAR_NAME_SEPARATOR = ',';
export const WINNER_SEPARATOR = ', ';
export const WINNER_MESSAGE = (winners) =>
  `이번 게임의 우승자는 ${winners.join(WINNER_SEPARATOR)}!!!\n축하합니다🎉🎉🎉`;
export const WINNER_MESSAGE_DELAY = 2000;
export const RACING_RESULT_DELAY = 1000;
export const CAR_NAME_MAX_LENGTH = 5;
export const MIN_NUMBER = 0;
export const MAX_NUMBER = 9;
export const MOVE_BOUNDED_NUMBER = 4; // 4이상일 때 전진
export const SPINNER_TEMPLATE = `
  <div class="d-flex justify-center mt-4">
    <div class="relative spinner-container">
      <span class="material spinner"></span>
    </div>
  </div>
`;
