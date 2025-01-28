function solution(n, k) {
  var service = parseInt(n / 10);
  var answer = n * 12000 + k * 2000 - service * 2000;
  return answer;
}