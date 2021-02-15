import Spinner from "../animations/spinner.js";

export async function setTimeoutWithSpinner(
  spinnerElements,
  callback,
  delay,
  ...args
) {
  const spinners = Array.from(spinnerElements).map(
    ($spinnerElement) => new Spinner($spinnerElement, 6)
  );

  spinners.forEach((spinner) => spinner.render());
  await new Promise((resolve) => {
    setTimeout(() => {
      spinners.forEach((spinner) => spinner.clear());
      callback(...args);
      setTimeout(() => {
        resolve();
      }, 300);
    }, delay);
  });
}
