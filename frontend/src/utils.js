export function percentDifference(a, b) {
  if (!a || !b) return 0;
  return +(((b - a) / a) * 100).toFixed(2);
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
