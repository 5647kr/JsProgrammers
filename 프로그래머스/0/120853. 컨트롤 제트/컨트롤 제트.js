function solution(s) {
  var arr = s.split(" ")
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "Z") {
      arr[i - 1] = "0";
      arr[i] = "0"
    }
  }
  var answer = arr.map(Number).reduce((acc, cur) => acc + cur)
  return answer;
}