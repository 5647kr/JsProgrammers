// 방법1
function solution(num_list) {
    var answer = [0, 0];
    num_list.forEach((item) => {
        if(item % 2 === 0) {
          answer[0] += 1;
        } else {
          answer[1] += 1;
        }
    })
    return answer;
}

// 방법2
// function solution(num_list) {
//     var answer = [0, 0];
//     let even = num_list.filter((item) => item % 2 === 0).length;
    
//     answer[0] = even;
//     answer[1] = num_list.length - even;
    
//     return answer
// }