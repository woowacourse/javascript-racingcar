export default class State {
  #_value;
  #handlers;

  constructor(initialValue) {
    this.#_value = initialValue;
    this.#handlers = new Set();
  }

  subscribe = handler => {
    if (typeof handler === 'function') {
      this.#handlers.add(handler);
    }
  };

  get value() {
    return this.#_value;
  }

  set value(newValue) {
    if (this.#_value === newValue) {
      return;
    }
    this.#_value = newValue;
    this.#notify();
  }

  #notify() {
    for (const handler of this.#handlers) {
      handler();
    }
  }
}
