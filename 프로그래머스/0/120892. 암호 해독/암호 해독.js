function solution(cipher, code) {
    var arr = cipher.split("");
    var answer = ""
    for(let i = code; i <= arr.length; i += code) {
      answer += arr[i - 1]
    }
    return answer;
}