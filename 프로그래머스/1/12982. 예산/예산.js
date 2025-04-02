function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d = d.sort((a, b) => a - b);
  console.log(d)

  for(let i = 0; i < d.length; i++) {
    if(sum + d[i] <= budget) {
      answer++;
      sum += d[i]
    }
  }
  return answer;
}