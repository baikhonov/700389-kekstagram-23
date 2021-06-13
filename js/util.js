function getRandomIntegerFromRange(first, second) {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));

  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomUniqueElementFromArray(arr) {
  const randomElement = arr.splice(Math.floor(Math.random() * arr.length), 1);
  return randomElement[0];
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('test', 10);

export {
  getRandomIntegerFromRange,
  getRandomUniqueElementFromArray
};
