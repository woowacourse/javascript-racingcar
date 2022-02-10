import { $ } from '../utils/dom.js';

export default class View {
  constructor() {}

  renderCarNames(carNames) {
    const template = carNames
      .map((carName) => {
        return `<span>${carName}</span>`;
      })
      .join('');
    $('#car-names').insertAdjacentHTML('afterbegin', template);
  }
}
