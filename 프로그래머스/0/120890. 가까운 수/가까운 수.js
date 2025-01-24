function solution(array, n) {
  array.push(n);
  var newArr = [...array].sort((a, b) => a - b);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === n) {
      if (i === 0) {
        return newArr[i + 1];
      } else if (i === newArr.length - 1) {
        return newArr[i - 1];
      } else {
        if (n - newArr[i - 1] <= newArr[i + 1] - n) {
          return newArr[i - 1];
        } else {
          return newArr[i + 1];
        }
      }
    }
  }
}
