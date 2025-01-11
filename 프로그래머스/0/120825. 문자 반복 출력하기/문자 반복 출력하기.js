function solution(my_string, n) {
    var arr = my_string.split("");
    var answer = ""
    for(let i = 0; i < arr.length; i++) {
      answer += arr[i].repeat(n)
    }
    return answer;
}