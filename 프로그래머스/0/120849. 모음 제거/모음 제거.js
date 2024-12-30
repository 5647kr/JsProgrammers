function solution(my_string) {
    var answer = my_string.split("").filter((item) => !["a", "e", "i", "o", "u"].includes(item)).join("");
    return answer;
}

// 다른 방법1
// function solution(my_string) {
//     var answer = my_string.replace(/[aeioi]/g, "")
//     return answer;
// }