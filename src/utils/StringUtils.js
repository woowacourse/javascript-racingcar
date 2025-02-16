import { CONFIG } from '../constants/config';

const StringUtils = {
  isValidLength(str, min, max) {
    return str.length >= min && str.length <= max;
  },
  hasBlank(str) {
    return str.includes(CONFIG.BLANK);
  },
  hasDuplicate(strings) {
    return strings.length !== new Set(strings).size;
  },
};

export default StringUtils;
