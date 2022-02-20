export const arrowTemplate = '<div class="forward-icon mt-2">⬇️️</div>';

export const carPlayerTemplate = (name) => {
  return `
    <div>
      <div class="car-player mr-2" data-car-name=${name}>${name}</div>
      <div class="d-flex justify-content-center mt-4">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    </div>
  `;
};
