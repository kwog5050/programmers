function solution(a, b) {
  let sum = 0;
  if(a > b){
      for(let i = b; i <= a; i++ ){
          sum += i;
      }
  } else {
      for(let i = a; i <= b; i++){
          sum += i;
      }
  }
  
  return sum;
}  

// https://school.programmers.co.kr/learn/courses/30/lessons/12912