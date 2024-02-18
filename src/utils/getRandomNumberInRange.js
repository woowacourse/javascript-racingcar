// [-Infinity, Infinity], *TODO: (-Infinity + Infinity) -> NaN
function getRandomNumberInRange(lower, upper) {
  if (typeof lower !== 'number' || typeof upper !== 'number')
    throw new Error('[ERROR]Number가 아닌 인자가 들어옴');
  if (lower > upper) throw new Error('[ERROR]lower가 upper보다 큼');

  //Infinity가 범위에 포함될 경우

  //Infinity - Infinity는 NaN이 나오므로 두 값이 같은 경우를 처리함
  if (lower === upper) return lower;
  if (!Number.isFinite(lower))
    lower = Math.sign(lower) * Number.MAX_SAFE_INTEGER;
  if (!Number.isFinite(upper))
    upper = Math.sign(upper) * Number.MAX_SAFE_INTEGER;

  return lower + Math.random() * (upper - lower);
}

export default getRandomNumberInRange;
