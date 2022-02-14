import GAME_SETTING from '../constants/setting.js';

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * maxNumber) + minNumber;
}

const isAdvance = () => {
  const { ADVANCE_RANGE_MIN, ADVANCE_RANGE_MAX, ADVANCE_NUMBER } = GAME_SETTING;
  return (
    getRandomNumber(ADVANCE_RANGE_MIN, ADVANCE_RANGE_MAX) >= ADVANCE_NUMBER
  );
};

export default isAdvance;
