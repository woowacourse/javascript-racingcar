export default class View {
  constructor(element) {
    this.element = element;
  }

  insertTemplate(template) {
    this.element.insertAdjacentHTML('beforeend', template);
  }

  on(event, handler) {
    this.element.addEventListener(event, handler);

    return this;
  }

  emit(event, data) {
    const customEvent = new CustomEvent(event, { detail: data });
    this.element.dispatchEvent(customEvent);

    return this;
  }
}
