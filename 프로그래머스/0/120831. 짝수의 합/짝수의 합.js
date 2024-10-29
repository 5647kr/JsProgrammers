// 방법1
function solution(n) {
  var answer = 0;
  for(let i = 0; i <= n; i++) {
    if(i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

// 방법2
// function solution(n) {
//   var answer = 0;
//   for(let i = 2; i <= n; i += 2) {
//     answer += i
//   }
//   return answer;
// }

// 방법3
// function solution(n) {
//   var answer = 0;
//   let i = 0;
//   while(n) {
//     if(i % 2 === 0) {
//       answer += i;
//       i++
//     } else {
//       i++
//     }
// 
//     if(i === n + 1) break;
//   }
//   return answer;
// }
