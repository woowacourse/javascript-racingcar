import { DOM_ID } from '../constants/selector.js';
import { createElement } from '../utils/element-tools.js';

const templateCarStateConatiner = (carList) =>
  carList.map((instance, index) => {
    const $carStateContainer = createElement('DIV', {
      className: DOM_ID.RACE_CAR_STATE,
    });
    $carStateContainer.dataset.key = index;
    $carStateContainer.classList.add(DOM_ID.RACE_CAR_STATE);

    const $carName = createElement('DIV', {
      className: DOM_ID.RACE_CAR_NAME_BOX,
      innerText: instance.name,
    });

    $carStateContainer.append($carName);
    return $carStateContainer;
  });

const templateCarAdvance = () =>
  createElement('DIV', {
    className: DOM_ID.RACE_ADVANCE,
    innerText: '⬇️️',
  });

export { templateCarStateConatiner, templateCarAdvance };
