export const templateRacingCountForm = `
  <label for="racing_count_input">시도할 횟수를 입력해주세요.</label>
  <div class="input_box">
    <input type="number" id="racing_count_input" class="user_input" placeholder="10" />
    <button class="input_btn">확인</button>
  </div>
`;

export const templateRacingCarItem = (carName) => `
    <div class="racing_car_item">
      <div class="racing_car_name">${carName}</div>
      <ul class="racing_car_progress">
      </ul>
      <div class="spinner_container"></div>
    </div>
  `;

export const templateProgress = '<li>⬇</li>';

export const templateSpinner = '<div class="spinner"/>';
