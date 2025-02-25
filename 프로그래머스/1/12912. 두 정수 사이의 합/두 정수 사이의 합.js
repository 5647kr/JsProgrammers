function solution(a, b) {
  var sort = [a, b].sort((a, b) => a - b);
  for(let i = sort[0] + 1; i < sort[1]; i++) {
    sort.push(i)
  }

  if(sort[0] === sort[1]) {
    return sort[0]
  } else {
    return sort.sort((a, b) => a - b).reduce((acc, cur) => acc + cur, 0)
  }
}