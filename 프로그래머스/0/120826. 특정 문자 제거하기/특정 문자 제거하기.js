// 방법1
function solution(my_string, letter) {
    var answer = [...my_string].filter(my_string => my_string !== letter).join("");
    return answer;
}

// 방법1(일반 함수형태)
// function solution(my_string, letter) {
//   var answer = [...my_string].filter(function(my_string) {
//     return my_string !== letter
//   }).join("");
//   return answer;
// }

// 방법2(for문)
// function solution(my_string, letter) {
//   var answer = ""
//   for(let i = 0; i < my_string.length; i++) {
//     if(my_string[i] !== letter) {
//       answer += my_string[i]
//     }
//   }
//   return answer;
// }

// 방법3(split)
// function solution(my_string, letter) {
//     var answer = my_string.split(letter).join("")
//     return answer;
// }

// 방법4(정규표현식)
// function solution(my_string, letter) {
//    let reg = new RegExp(letter, 'g') 
//    return my_string.replace(reg, '');
// }