import $ from '../util/dom.js';

export default function resetView() {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.count-form').classList.add('display-none');
  $('.game-result-container').innerHTML = '';
  $('.restart-container').classList.add('display-none');
}
