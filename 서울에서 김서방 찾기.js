function solution(seoul) {
  var answer = 0;
  for (let i = 0; i < seoul.length; i++){
    if (seoul[i] == "Kim") {
      answer = i;
    }
  }
  return `김서방은 ${answer}에 있다`;
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/12919