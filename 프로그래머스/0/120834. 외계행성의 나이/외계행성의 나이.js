function solution(age) {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let index = String(age).split("");

  var answer = "";

  for(let i = 0; i < index.length; i++) {
    answer += arr[index[i]]
  }

  return answer;
}