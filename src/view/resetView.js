export default function resetView() {
  const nameInput = document.querySelector('.name-input');
  const countInput = document.querySelector('.count-input');
  const countForm = document.querySelector('.count-form');
  const resultContainer = document.querySelector('.game-result-container');
  const restart = document.querySelector('.restart-container');

  nameInput.value = '';
  countInput.value = '';
  countForm.style.display = 'none';
  resultContainer.innerHTML = '';
  restart.style.display = 'none';
}
