function solution(x) {
  let y = String(x).split("").map(Number).reduce((a, b) => a + b, 0)
  if(x % y === 0) {
    return true;
  } else {
    return false
  }
}