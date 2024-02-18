import deepFreeze from '../../utils/deepFeeze.js';

/* eslint-disable no-useless-escape */
const REGEX_CONFIG = deepFreeze({
  SPECIAL_CHARACTER: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
});

export default REGEX_CONFIG;
