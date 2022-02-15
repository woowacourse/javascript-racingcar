export default function resetView() {
  const nameInput = document.body.querySelector('.name-input');
  const countForm = document.body.querySelector('.count-form');
  const countInput = countForm.children[1].firstChild;
  const result = document.body.querySelector('.result');
  const resultContainer = result.children[0];
  const restart = result.children[1];

  nameInput.value = '';
  countInput.value = '';
  countForm.style.display = 'none';
  resultContainer.innerHTML = '';
  restart.style.display = 'none';
}
