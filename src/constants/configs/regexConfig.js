import deepFreeze from '../../utils/deepFeeze.js';

/* eslint-disable no-useless-escape */
const REGEX_CONFIG = deepFreeze({
  SPECIAL_CHARACTER: /^[A-Za-z0-9가-힣]+$/,
});

export default REGEX_CONFIG;
