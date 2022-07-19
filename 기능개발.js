function solution(progresses, speeds) {
  var answer = [];
  let speed = [];

  for (let i = 0; i < progresses.length; i++){
    speed.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let first = answer[0];
  for (let i = 0; i < speed.length; i++){
    if (speed[i] <= first) {
      answer[answer.length - 1] += 1;
    } else {
      answer.push(1);
      first = speed[i];
    }
  }

  console.log(answer);
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42586