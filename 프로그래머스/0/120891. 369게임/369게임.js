function solution(order) {
    var answer = String(order).match(/[369]/g);
    return answer ? answer.length : 0;
}