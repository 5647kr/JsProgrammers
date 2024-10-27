function solution(num1, num2) {
    // 방법1
    var answer = 0;
    answer = parseInt((num1 / num2) * 1000);
    return answer;
    
    // 방법2
    // return parseInt((num1 / num2) * 1000);
    
    // 방법3
    // solution = (num1, num2) => parseInt((num1 / num2) * 1000);
    
    // 방법4(동료풀이)
    // return ~~(num1/num2*1000);
    
    // 방법5(동료풀이)
    // const solution = (num1, num2) => Math.floor(num1 / num2 * 1000);
    
    // 방법6(동료풀이)
    // return Math.trunc(num1 / num2 * 1000);
}