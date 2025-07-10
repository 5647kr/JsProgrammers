function solution(progresses, speeds) {
    let answer = [];
    let number = 0;
    let cnt = 0;
    
    while(true){
        if(number === progresses.length){
            answer.push(cnt);
            break;
        }
        
        if(progresses[number] >= 100){
            number++;
            cnt++;
            continue;
        }else{
            if(cnt > 0) answer.push(cnt);
            cnt = 0;
        }
        
        for(let i=number; i<progresses.length; i++){
            progresses[i] += speeds[i];
        }
    }
    
    return answer;
}