import deepFreeze from '../utils/deepFeeze.js';

const DELIMITER = deepFreeze({
  NONE: '',
  SPACE: ' ',
  CAR_NAME_SEPARATOR: ',',
  SCORE_MARK: '-',
  COLON: ' : ',
});

export default DELIMITER;
