function solution(n) {
    var answer = String(n).split("").map(Number);
    return answer.reduce((acc, cur) => acc + cur, 0);
}