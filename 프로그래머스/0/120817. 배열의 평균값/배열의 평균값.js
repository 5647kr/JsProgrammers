function solution(numbers) {
    // 방법1
    var answer = 0;
    numbers.map((num) => {
        answer += num;
    })
    return answer / numbers.length;
    
    // 방법2
    // let answer = 0;
    // for(let i = 0; i < numbers.length; i++) {
    //   answer += numbers[i];
    // }
    // answer /= numbers.length;
    // return answer;
    
    // 방법3
    // let answer = 0;
    // numbers.forEach((num) => {
    //   answer += num;
    // })
    // answer /= numbers.length
    // return answer;
    
    // 방법4
    // let answer = 0;
    // answer = numbers.reduce((a, b) => a + b, 0);
    // answer /= numbers.length;
    // return answer;
}