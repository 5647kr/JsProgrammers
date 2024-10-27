function solution(angle) {
    // 방법1
    if(0 < angle && angle < 90) {
      return 1;
    } else if(angle === 90) {
      return 2;
    } else if(90 < angle && angle < 180 ) {
      return 3;
    } else {
      return 4;
    }
    
    // 방법2(동료 풀이)
    // return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
    
    // 방법3(동료 풀이)
    // return [0, 90, 91, 180].filter(x => angle>=x).length;
}