export const toggleVisibility = (target) => {
  const $racingCountSection = document.querySelector('#racing-count-section');
  const $gameProcessSection = document.querySelector('#game-process-section');
  const $gameResultSection = document.querySelector('#game-result-section');

  const sectionList = {
    $racingCountSection,
    $gameProcessSection,
    $gameResultSection,
  };

  sectionList[target].toggleAttribute('hidden');
};
