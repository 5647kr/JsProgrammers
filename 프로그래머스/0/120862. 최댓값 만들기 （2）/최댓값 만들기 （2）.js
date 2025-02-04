function solution(numbers) {
  numbers.sort((a, b) => a - b)
  var minusNum = numbers[0] * numbers[1];

  var bigNum = numbers.slice(-2).reduce((acc, cur) => acc * cur);

  if(bigNum > minusNum) {
    return bigNum
  } else {
    return minusNum;
  }
}