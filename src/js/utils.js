/* Dom Element 조작 합수 */
export function disableElement($element) {
  $element.disabled = true;
};

export function enableElement($element) {
  $element.disabled = false;
};

export function show($element) {
  $element.style.display = 'block';
};

export function hide($element) {
  $element.style.display = 'none';
};

export function initInputValue($element) {
  $element.value = '';
};

/* Random Number 생성기 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
