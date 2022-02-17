import { $ } from '../utils/selector.js';

const resetView = () => {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.race-container').innerHTML = '';
  $('.winner-container').innerHTML = '';
  $('.count-form').classList.add('hidden');
  $('.restart').classList.add('hidden');
};

export default resetView;
