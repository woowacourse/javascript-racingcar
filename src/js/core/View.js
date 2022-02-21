import { $, $all } from '../utils/utils.js';

export default class View {
  static renderStack = [];

  constructor($target, template) {
    this.$target = $target;
    this.template = template;

    View.render();
  }

  static render() {
    const checkUpdated = () => {
      if (View.renderStack.length > 0) {
        View.renderStack.pop()();
        View.renderStack.length = 0;
      }

      requestAnimationFrame(checkUpdated);
    };

    requestAnimationFrame(checkUpdated);
  }

  static update(callback) {
    View.renderStack.push(callback);
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
