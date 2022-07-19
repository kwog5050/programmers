function solution(x, n) {
  let answer = [];
  let sum = 0;
  
  for(let i = 0; i < n; i++){
      sum += x;
      answer.push(sum);
  }
  
  return answer;
}  

// https://school.programmers.co.kr/learn/courses/30/lessons/12954