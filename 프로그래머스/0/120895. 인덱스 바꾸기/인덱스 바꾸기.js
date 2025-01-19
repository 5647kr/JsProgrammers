function solution(my_string, num1, num2) {
  var answer = my_string.split("");
  var num1txt = answer[num1];
  var num2txt = answer[num2];

  answer[num1] = num2txt;
  answer[num2] = num1txt;
  
  return answer.join("");
}