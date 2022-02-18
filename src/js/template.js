export const arrow = '<div class="forward-icon mt-2">⬇️️</div>';

export const carView = (carName) => {
  return `
    <div class="mr-2">
      <div class="car-player">${carName}</div>
      <div class="car-racing-status"></div>
      <div class="relative spinner-container">
        <span class="spinner"></span>
      </div>
    </div>
  `;
};
