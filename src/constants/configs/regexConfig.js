import deepFreeze from '../../utils/deepFeeze.js';

const REGEX_CONFIG = deepFreeze({
	special_character: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
});

export default REGEX_CONFIG;
