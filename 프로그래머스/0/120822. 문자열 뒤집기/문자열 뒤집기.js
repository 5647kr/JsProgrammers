// 방법1
function solution(my_string) {
    var answer = my_string.split("").reverse().join().replaceAll(",", "");
    return answer;
}

// 방법2 (for문 방법)
// function solution(my_string) {
//     var answer = ""
//     for(let i = 0; i < my_string.length; i++) {
//         answer = my_string[i] + answer;
//     }
//     return answer;
// }

// 방법3 (동료 풀이 / 재귀함수)
// function solution(my_string) {
//     if(my_string.length <= 1) {
//         return my_string
//     }
//     return solution(my_string.slice(1)) + my_string[0];
// }