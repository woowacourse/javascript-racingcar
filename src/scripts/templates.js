const getRacingRecordTemplate = (record) => {
  return record
    ? [...Array(record)].reduce((template) => {
        return `${template}<div class="forward-icon mt-2">⬇️️</div>`;
      }, "")
    : "";
};

export const getResultAreaTemplate = (carList) => {
  const resultAreaList = carList.map(
    (car) => `
      <div>
        <div class="car-player mr-2">${car.carName}</div>
        ${getRacingRecordTemplate(car.record)}
        <div class="spinner-container mt-2">
          <div class="spinner"></div>
        </div>
      </div>
    `
  );

  return resultAreaList.join("");
};

export const getWinnersTemplate = (winners) => {
  return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
};
