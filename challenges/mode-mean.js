/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


const modemean = (a, freqs = {}) => {
  if (!a.length) return true; // vacuously
  for (let i = 0; i < a.length; i++) {
    if (freqs[a[i]]) freqs[a[i]]++;
    else freqs[a[i]] = 1;
  }
  let mode = a[0];
  for (let i = 1; i < a.length; i++) if (freqs[a[i]] > freqs[mode]) mode = a[i];
  const acc = a.reduce((acc, e) => acc + e, 0);
  mode = freqs[Math.floor(acc / a.length)] > freqs[mode] ? Math.floor(acc / a.length) : mode;
  return Math.floor(acc / a.length) === mode;
};

module.exports = modemean;
