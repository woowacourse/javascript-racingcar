export default class Section {
  constructor(element) {
    this.element = element;
  }
}

Section.prototype.show = function () {
  this.element.style.display = "block";
};

Section.prototype.hide = function () {
  this.element.style.display = "none";
};
