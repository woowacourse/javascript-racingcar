import $ from '../util/dom.js';

export default function resetView() {
  $('.name-input').value = '';
  $('.count-input').value = '';
  $('.count-form').style.display = 'none';
  $('.game-result-container').innerHTML = '';
  $('.restart-container').style.display = 'none';
}
