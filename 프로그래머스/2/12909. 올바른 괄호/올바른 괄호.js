function solution(s){
  let arr = [];
  for(char of s) {
    if(char === "(") {
      arr.push(char)
    } else if(char === ")") {
      if(arr.length === 0) {
        return false;
      }
      arr.pop()
    }
  }
  return arr.length === 0;
}