function solution(left, right) {
  let total = 0;
  let sum = 0;
  
  for(let i = left; i <= right; i++){
      for(let j = 1; j <= i; j++){
          if(i % j == 0){
              sum ++;
          }
      }
      sum % 2 == 0 ? total += i : total -=i;
      sum = 0;
  }
  return total;
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/77884