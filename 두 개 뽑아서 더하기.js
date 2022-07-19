function solution(numbers) {
  var answer = [];
  let val = 0;

  for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
      if (i !== j) {
        val = numbers[i] + numbers[j];
        answer.push(val);
        val = 0;
      }
    }
  }

  let setAnswer = new Set(answer);
  answer = [...setAnswer].sort((a, b) => a - b);
  
  return answer;
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/68644