import deepFreeze from '../../utils/deepFeeze';

const REGEX_CONFIG = deepFreeze({
  SPECIAL_CHARACTER: /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/,
});

export default REGEX_CONFIG;
