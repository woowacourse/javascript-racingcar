const getCarRecordTemplate = (record) => {
  let carRecordTemplate = '';
  for (let i = 0; i < record; i += 1) {
    carRecordTemplate += '<div class="forward-icon mt-2">⬇️️</div>'
  }

  return carRecordTemplate;
}

export const getResultAreaTemplate = (carList) => {
  const resultAreaList = carList.map(car =>  `
    <div>
      <div class="car-player mr-2">${car.carName}</div>
      ${getCarRecordTemplate(car.record)}
    </div>
  `);

  return resultAreaList.join('');
}

export default {
  getResultAreaTemplate
}