// [-Infinity, Infinity], *TODO: (-Infinity + Infinity) -> NaN
function getRandomNumberInRange(lower, upper) {
  if (typeof lower !== 'Number' || typeof upper !== 'Number')
    throw new Error('[ERROR]Number가 아닌 인자가 들어옴');
  if (lower > upper) throw new Error('[ERROR]lower가 upper보다 큼');

  return lower + Math.random() * (upper - lower);
}

export default getRandomNumberInRange;
