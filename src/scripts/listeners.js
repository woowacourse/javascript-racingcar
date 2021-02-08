import handler from './handlers.js';
import { $carNameSubmit } from './elements.js';

export const addRacingCarGameListener = () => {
  $carNameSubmit.addEventListener('click', handler.onCarNameSubmit);
}

export default {
  addRacingCarGameListener
}