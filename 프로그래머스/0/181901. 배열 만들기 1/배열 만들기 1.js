function solution(n, k) {
    var answer = [];
    let num = k
    while(n >= k) {
      answer.push(k)
      k += num;
    }
    return answer;
}