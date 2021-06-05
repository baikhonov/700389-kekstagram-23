function getRandomIntegerFromRange(min, max) {
  if (min < 0 || max < 0) {
    return 'Нельзя использовать отрицательные значения';
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  const randomNumber = min + Math.random() * (max - min + 1);
  return Math.floor(randomNumber);
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomIntegerFromRange(1, 4);
checkStringLength('Мама мыла раму', 10);
