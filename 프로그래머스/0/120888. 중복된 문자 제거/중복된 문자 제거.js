function solution(my_string) {
  var answer = ""
  my_string.split("").forEach((item) => {
    if(!answer.includes(item)) {
      answer += item
    }
  });
  return answer;
}