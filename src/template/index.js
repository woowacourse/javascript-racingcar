export const racingCountFormTemplate = `
  <label for="racing_count_input">시도할 횟수를 입력해주세요.</label>
  <div class="input_box">
    <input type="number" id="racing_count_input" class="user_input" placeholder="10" />
    <button class="input_btn">확인</button>
  </div>
`;

export const getRacingCarItemTemplate = (carName) => `
    <div class="racing_car_item">
      <div class="racing_car_name">${carName}</div>
      <ul class="racing_car_progress">
      </ul>
      <div class="spinner_container"></div>
    </div>
  `;

export const progressTemplate = '<li>⬇</li>';

export const spinnerTemplate = '<div class="spinner"/>';

export const getFinalWinnerTemplate = (finalWinner) => `
  🏆최종 우승자 : <span id="final_winner_result">${finalWinner}</span>🏆
`;

export const restartButtonTemplate = '<button id="restart_btn">다시 시작하기</button>';
