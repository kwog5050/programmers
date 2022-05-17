function solution(participant, completion) {
  var answer = '';
  let participantMap = new Map();
  for (let i = 0; i < participant.length; i++){
    if (participantMap.get(participant[i]) == undefined) {
      participantMap.set(participant[i], 1);
    } else {
      participantMap.set(participant[i], participantMap.get(participant[i]) + 1);
    }
  }

  for (let i = 0; i < completion.length; i++){
    participantMap.set(completion[i], participantMap.get(completion[i]) - 1);
    if (participantMap.get(completion[i]) <= 0) {
      participantMap.delete(completion[i]);
    }
  }

  answer = [...participantMap.keys()];
  return answer[0];
}