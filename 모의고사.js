function solution(answers) {
  var answer = [];
  var arr = [0, 0, 0];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let oneIndex = 0;
  let twoIndex = 0;
  let threeIndex = 0;
  for (let i = 0; i < answers.length; i++){

    if (one[oneIndex] == answers[i]) {
      arr[0] += 1;
    }
    if (two[twoIndex] == answers[i]) {
      arr[1] += 1;
    }
    if (three[threeIndex] == answers[i]) {
      arr[2] += 1;
    }

    oneIndex++;
    twoIndex++;
    threeIndex++;
    if (oneIndex >= one.length) {
      oneIndex = 0;
    }
    if (twoIndex >= two.length) {
      twoIndex = 0;
    }
    if (threeIndex >= three.length) {
      threeIndex = 0;
    }
  }

  const max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

solution([1,3,2,4,2]);