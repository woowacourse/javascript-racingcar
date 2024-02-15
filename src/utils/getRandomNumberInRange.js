function getRandomNumberInRange(lower, upper) {
  if (lower > upper) [lower, upper] = [upper, lower];

  return lower + Math.random() * (upper - lower);
}

export default getRandomNumberInRange;
