function solution(t, p) {
  var answer = 0;
  
  for(let i = 0; i < t.length; i++) {
    console.log(t.slice(i, p.length + i))
    if(t.slice(i, p.length + i) <= p && t.slice(i, p.length + i).length === p.length) {
      answer++
    }
  }

  return answer;
}
