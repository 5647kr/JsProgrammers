// 방법1
function solution(array, height) {
    var answer = 0;
    for(item of array) {
      if(item > height) {
        answer++;
      }
    }
    return answer;
}

// 방법2
// function solution(array, height) {
//    var answer = 0;
//    answer = array.filter(item => item > height).length;
//    return answer;
// }

// 방법3
// function solution(array, height) {
//   return array.reduce(function(count, item) {
//     return count + (item > height ? 1 : 0);
//   }, 0);
// }
