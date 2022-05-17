function solution(lottos, win_nums) {
  var answer = [];
  let ok = 0;
  let unknown = 0;
  let rank = 0;

  for (let i = 0; i < lottos.length; i++){
    if (0 == lottos[i]) {
      unknown++;
    }
  }

  for (let i = 0; i < win_nums.length; i++){
    for (let j = 0; j < lottos.length; j++){
      if (win_nums[i] == lottos[j]) {
        ok++;
      }
    }
  }

  if (0 == ok + unknown) {
    answer = [6, 6];
  } else {
    for (let i = win_nums.length; i > 0; i--) {
      rank++;
      if (i == ok + unknown) {
        answer = [rank, rank + unknown > 6 ? 6 : rank + unknown];
      }
    }
  }

  return answer;
} 