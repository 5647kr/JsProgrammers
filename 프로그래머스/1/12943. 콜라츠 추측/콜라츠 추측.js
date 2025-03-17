function solution(num) {
  var answer = 0;
  let remain = num;
  while(true) {
    if(remain % 2 === 0) {
      remain = remain / 2;
      answer++
    } else {
      remain = remain * 3 + 1
      answer++
    }
    
    if(num === 1) {
      return 0
    }

    if(remain === 1) {
      if(answer >= 500) {
        return -1
      } else {
        return answer
      }
    }
  }
}