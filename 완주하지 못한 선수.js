function solution(participant, completion) {
  var answer = '';
  let participantMap = new Map();

  //선수 키값 메기기, 중복선수가 있으면 값 +1
  for (let i = 0; i < participant.length; i++){
    if (participantMap.get(participant[i]) == undefined) {
      participantMap.set(participant[i], 1);
    } else {
      participantMap.set(participant[i], participantMap.get(participant[i]) + 1);
    }
  }

  //완주한 선수 있으면 값 -1 값이 0 이상이면 완주 못한선수
  for (let i = 0; i < completion.length; i++){
    participantMap.set(completion[i], participantMap.get(completion[i]) - 1);
    if (participantMap.get(completion[i]) <= 0) {
      participantMap.delete(completion[i]);
    }
  }

  answer = [...participantMap.keys()];
  return answer[0];
} 

// https://school.programmers.co.kr/learn/courses/30/lessons/42576