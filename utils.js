const chop = (portionable = [], sliceSize = 1) => {
  const result = [];
  const innerChop = (arr) => {
    const slice = arr.slice(0, sliceSize);
    result.push(slice);
    const reduced = arr.slice(sliceSize);
    return reduced.length === 0 ? result : innerChop(reduced);
  }
  return innerChop(portionable);
};

const busyWaiting = (delayMs) => new Promise((resolve) => {
  const expire = Date.now() + (delayMs || 1000);
  while (Date.now() < expire) {
  }
  resolve();
});

module.exports = {
  chop,
  busyWaiting,
};
