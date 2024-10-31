// 방법1
function solution(n) {
    var answer = [];
    for(let i = 0; i <= n; i++) {
      if(i % 2 !== 0) {
        answer.push(i)
      }
    }
    return answer;
}

// 방법2
// function solution(n) {
//      var answer = [];
//      for(let i = 1; i <= n; i += 2) {
//        answer.push(i)
//      }
//   return answer;
// }

// 방법3
// function solution(n) {
//     var answer = [];
//     let i = 1;
//     while(n) {
//       if(i % 2 !== 0) {
//         answer.push(i)
//       }
//       i++
//       
//       if(i === n) break;
//     }
//     return answer;
// }
