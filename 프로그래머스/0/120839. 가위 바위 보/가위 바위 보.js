function solution(rsp) {
  var answer = ""
  rsp.split("").map((item) => {
    if(item === "2") {
      answer += "0"
    } else if(item === "0") {
      answer += "5"
    } else {
      answer += "2"
    }
  });
  return answer;
}