import $ from '../util/dom.js';

export default function resetView() {
  const nameInput = $('.name-input');
  const countInput = $('.count-input');
  const countForm = $('.count-form');
  const resultContainer = $('.game-result-container');
  const restart = $('.restart-container');

  nameInput.value = '';
  countInput.value = '';
  countForm.style.display = 'none';
  resultContainer.innerHTML = '';
  restart.style.display = 'none';
}
