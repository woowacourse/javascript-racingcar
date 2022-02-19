let rotateCount = 0;
let startTime = null;

export default function spinSpinner(timestamp) {
  const spinners = document.querySelectorAll('.spinner img');
  if (!startTime) {
    startTime = timestamp;
  }
  rotateCount = (timestamp - startTime) / 3;
  if (rotateCount > 359) {
    rotateCount %= 360;
  }
  spinners.forEach(spinner => {
    spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
  });
  requestAnimationFrame(spinSpinner);
}
