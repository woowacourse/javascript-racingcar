import deepFreeze from '../../utils/deepFeeze.js';

const REGEX_CONFIG = deepFreeze({
  SPECIAL_CHARACTER: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
});

export default REGEX_CONFIG;
