function solution(common) {
  var btwN1 = common[1] - common[0]
  var btwN2 = common[2] - common[1]

  if(btwN1 === btwN2) {
    return parseInt(common.slice(-1)) + btwN1
  } else {
    return parseInt(common.slice(-1) * (common[1] / common[0]))
  }
}