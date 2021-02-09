export const toggleDisabled = (target) => {
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  const buttonList = {
    $carNameSubmit,
    $racingCountSubmit,
  };

  buttonList[target].toggleAttribute('disabled');
};
