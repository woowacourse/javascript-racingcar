import $ from '../utils/selector.js';

const resetView = () => {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.game-result-container').innerHTML = '';
  $('.count-form').classList.add('hidden');
  $('.restart').classList.add('hidden');
};

export default resetView;
