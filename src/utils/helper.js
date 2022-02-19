function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsAll(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

function emit(target, eventName, detail) {
  const event = new CustomEvent(eventName, { detail });
  target.dispatchEvent(event);
}

export { qs, on, emit, qsAll }