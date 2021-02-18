const waitSeconds = (waitingTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, waitingTime * 1000)
  })
}

const repeat = (repeatCount, duration, callback) => {
  return new Promise((resolve, reject) => {
    let count = 1;
    const carMoveInterval = setInterval(async () => {
      if (count === repeatCount) {
        clearInterval(carMoveInterval);
        resolve();
      }
      callback();
      count += 1;
    }, duration * 1000);
  })
}

export default {
  waitSeconds,
  repeat
}