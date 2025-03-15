function solution(s){
  let Pcount = 0;
  let Ycount = 0;

  s = s.toLowerCase().split("").forEach((item) => {
    if(item === "p") {
      Pcount++
    } else if(item === "y") {
      Ycount++
    }
  });


  if(Pcount === Ycount) {
    return true;
  } else if(Pcount !== Ycount) {
    return false
  }
}