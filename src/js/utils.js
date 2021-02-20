/* Dom Element 조작 합수 */
export function disableElement($element) {
  $element.disabled = true;
};

export function enableElement($element) {
  $element.disabled = false;
};

/* Random Number 생성기 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
