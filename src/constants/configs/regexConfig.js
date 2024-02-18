import deepFreeze from '../../utils/deepFeeze.js';

/* eslint-disable no-useless-escape */
const REGEX_CONFIG = deepFreeze({
	special_character: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
});

export default REGEX_CONFIG;
