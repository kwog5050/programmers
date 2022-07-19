function solution(n) {
  let arr = ['수', '박'];
  let answer = '';
  for (let i = 1; i <= n; i++){
    i % 2 == 1 ? answer += arr[0] : answer += arr[1];
  }
  return answer;
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/12922