import deepFreeze from '../../utils/deepFeeze.js';

const VALID_LIMIT_CONSTANTS_CONFIG = deepFreeze({
	ATTEMPT_LIMIT_RANGE: 20,
	CAR_NAME_LIMIT_RANGE: 5,
});

export default VALID_LIMIT_CONSTANTS_CONFIG;
