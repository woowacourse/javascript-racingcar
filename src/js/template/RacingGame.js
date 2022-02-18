import { DOM_ID } from '../constants/selector.js';

const templateCarStateConatiner = (carList) =>
  carList.map((instance, index) => {
    const $carStateContainer = document.createElement('DIV');
    $carStateContainer.dataset.key = index;
    $carStateContainer.classList.add(DOM_ID.RACE_CAR_STATE);

    const $carName = document.createElement('DIV');
    $carName.classList.add(DOM_ID.RACE_CAR_NAME_BOX);
    $carName.innerText = instance.name;
    $carStateContainer.append($carName);

    return $carStateContainer;
  });

const templateCarAdvance = () => {
  const $advance = document.createElement('DIV');
  $advance.classList.add(DOM_ID.RACE_ADVANCE);
  $advance.innerText = '⬇️️';

  return $advance;
};

export { templateCarStateConatiner, templateCarAdvance };
