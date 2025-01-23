function solution(array) {
  var answer = array.join("").split("").filter((item) => item === "7").length
  return answer;
}