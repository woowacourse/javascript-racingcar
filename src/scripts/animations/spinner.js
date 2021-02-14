export default class Spinner {
  constructor($spinnerElement, degSpeed) {
    this.$spinnerElement = $spinnerElement;
    this.degSpeed = degSpeed;
    this.deg = 0;
    this.rafId = null;
  }

  spin() {
    this.deg++;
    this.$spinnerElement.style.transform = `rotate(${
      (this.deg % (360 / this.degSpeed)) * this.degSpeed
    }deg)`;
    requestAnimationFrame(this.spin.bind(this));
  }

  render() {
    this.$spinnerElement.classList.add("material");
    this.rafId = requestAnimationFrame(this.spin.bind(this));
  }

  clear() {
    cancelAnimationFrame(this.rafId);
    this.$spinnerElement.classList.remove("material");
  }
}
