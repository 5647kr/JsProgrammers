// 방법1
function solution(array, n) {
    var answer = 0;
    for(i of array) {
      if(i === n) {
        answer++
      }
    }
    return answer;
}

// 방법2
// function solution(array, n) {
//     return array.filter(item => item === n).length
// }