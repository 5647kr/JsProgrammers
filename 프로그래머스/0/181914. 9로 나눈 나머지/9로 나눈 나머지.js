function solution(number) {
    number = number.split("").map(Number).reduce((a, b) => a + b, 0);
    return number % 9;
}