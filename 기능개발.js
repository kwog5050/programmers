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

solution([93, 30, 55],	[1, 30, 5]);

//100 - 30 = 70 
//70 < 30 * i 