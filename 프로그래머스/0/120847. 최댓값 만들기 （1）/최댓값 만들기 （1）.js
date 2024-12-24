function solution(numbers) {
    var answer = numbers.sort((a, b) => a - b).slice(-2);
    return answer[0] * answer[1];
}