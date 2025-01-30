function solution(numbers, direction) {
  var num = null;
  if(direction === "right") {
    num = numbers.pop();
    return [num, ...numbers]
  } else {
    num = numbers.shift();
    return [...numbers, num]
  }
}