function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sumArr = arr.reduce((a, b) => a + b, 0);

  let numArr = numbers.reduce((a, b) => a + b, 0);
  
  return sumArr - numArr;
}