function solution(s) {
  var answer = '';
  if(s.length % 2 === 0) {
    answer = s.substring(parseInt(s.length / 2) - 1, parseInt(s.length / 2) + 1)
  } else {
    answer = s.substring(parseInt(s.length / 2), parseInt(s.length / 2) + 1)
  }
  return answer;
}