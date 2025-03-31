function solution(s) {
  if(s.length === 4 || s.length === 6) {
    return s.split("").map(Number).every(str => /[0-9]/g.test(str))
  } else {
    return false
  }
}