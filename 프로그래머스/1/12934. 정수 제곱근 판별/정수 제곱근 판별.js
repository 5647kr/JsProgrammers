function solution(n) {
  var answer = Math.sqrt(n);
  return Number.isInteger(answer) ? (answer + 1) ** 2 : -1;
}