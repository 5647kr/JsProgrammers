function solution(my_string) {
  var answer = my_string.replace(/[a-zA-z]/g, "a").split("a").map(Number).reduce((acc, prev) => acc + prev, 0);
  return answer;
}