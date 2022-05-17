function solution(s){
  var answer = s.split("");
  let p = 0;
  let y = 0;
  for (let i = 0; i < answer.length; i++){
    if (answer[i] === "p" || answer[i] === "P") {
      p++;
    }else if (answer[i] === "y" || answer[i] === "Y") {
      y++;
    }
  }
  return p === y ? true : false;
} 