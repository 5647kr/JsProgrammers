function solution(i, j, k) {
  var answer = 0;
  var arr = []

  while (i <= j) {
    arr.push(...String(i).split(""))
    i++;
  }

  arr.forEach((item) => {
    if(item === String(k)) {
      answer++
    } else {
      return;
    }
  })
  return answer;
}