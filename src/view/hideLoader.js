import { hideElement } from '../utils/handleElement.js';
import { $$ } from '../utils/selector.js';

const hideLoader = () => {
  $$('.loader').forEach(element => {
    hideElement(element);
  });
};

export default hideLoader;
