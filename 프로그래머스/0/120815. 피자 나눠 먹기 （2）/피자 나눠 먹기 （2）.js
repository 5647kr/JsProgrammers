function solution(n) {
  var answer = 0;
  var pizza = 0;
  while(pizza < 999) {
    pizza += 6;
    if(pizza % n === 0) {
      answer = pizza / 6
      break;
    } else {
      continue;
    }
  }
  return answer;
}