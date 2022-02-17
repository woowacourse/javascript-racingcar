export const getRacingCarItemTemplate = (carName) => `
    <div class="racing_car_item">
      <div class="racing_car_name">${carName}</div>
      <ul class="racing_car_progress">
      </ul>
      <div class="spinner_container"></div>
    </div>
  `;

export const PROGRESS_TEMPLATE = '<li>⬇</li>';

export const templateSpinner = '<div class="spinner"/>';
