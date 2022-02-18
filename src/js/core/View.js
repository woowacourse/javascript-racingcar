import { $, $all } from '../utils/utils.js';

export default class View {
  constructor($target, template) {
    this.$target = $target;
    this.template = template;
  }

  bindEventListener(type, selector, callback) {
    const children = [...this.getAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  get(selector) {
    return $(selector, this.$target);
  }

  getAll(selector) {
    return $all(selector, this.$target);
  }
}
