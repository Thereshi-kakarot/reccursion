const contains = function (object, target, seen = new Set()) {
  if (object === null || typeof object !== 'object') return false;
  if (seen.has(object)) return false;
  seen.add(object);

  for (const value of Object.values(object)) {
    if (value === target) return true;
    if (typeof value === 'object' && contains(value, target, seen)) return true;
  }

  return false;
};

module.exports = contains