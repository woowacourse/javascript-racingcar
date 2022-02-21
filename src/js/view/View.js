import { SELECTOR } from '../constants.js';
import { $, $all } from '../utils/utils.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$APP);
  }

  alertMessage(message) {
    alert(message);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  toggleDisabledButton(selector) {
    selector.disabled = !selector.disabled;
    selector.classList.toggle('disabled');
  }

  toggleVisibled(element) {
    element.classList.toggle('invisible');
  }

  removeElement(parentElement, selector) {
    parentElement.removeChild($(selector));
  }

  removeElements(parentElements, selector) {
    [...parentElements].forEach((parentElement) => {
      const childElement = $(selector);
      parentElement.removeChild(childElement);
    });
  }

  insertText(selector, text) {
    selector.textContent = text;
  }

  render(selector, position, text) {
    selector.insertAdjacentHTML(position, text);
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }
}
