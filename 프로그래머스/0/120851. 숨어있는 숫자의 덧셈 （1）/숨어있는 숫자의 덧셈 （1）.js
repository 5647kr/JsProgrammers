function solution(my_string) {
    var answer = my_string.replace(/[a-zA-z]/g, 0).split("");
    return answer.map(Number).reduce((acc, cur) => acc + cur)
}