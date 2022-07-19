function solution(a, b) {
  var answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  let day = new Date(`2016-${a}-${b}`).getDay();
  return answer[day];
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/12901