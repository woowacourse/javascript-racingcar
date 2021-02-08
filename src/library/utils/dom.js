export function disableElement($element) {
  $element.disabled = true;
}

export function hideElement($element) {
  $element.classList.add("hidden");
}

export function showElement($element) {
  $element.classList.remove("hidden");
}