export default class Spinner {
  constructor($spinnerElement, degSpeed) {
    this.$spinnerElement = $spinnerElement;
    this.degSpeed = degSpeed;
    this.deg = 0;
    this.stop = false;
  }

  spin() {
    this.deg++;
    this.$spinnerElement.style.transform = `rotate(${
      (this.deg % (360 / this.degSpeed)) * this.degSpeed
    }deg)`;

    const rafId = requestAnimationFrame(this.spin.bind(this));
    this.stop && cancelAnimationFrame(rafId);
  }

  render() {
    this.$spinnerElement.classList.add("material");
    this.spin();
  }

  clear() {
    this.stop = true;
    this.$spinnerElement.classList.remove("material");
  }
}
