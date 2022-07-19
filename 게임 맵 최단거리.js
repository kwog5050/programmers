function solution(maps) {
  var answer = 0;

  if (maps[maps.length - 2][maps[0].length - 1] == 0 && maps[maps.length - 1][maps[0].length - 2] == 0) {
    answer = - 1;
  } else {
    for (let i = 0; i < maps.length; i++) {
      for (let j = 0; j < maps[i].length; j++) {

        if (maps[i][j] == 1) {
          answer++;
        }

        if (maps[i][j] == 0) {
          if (maps[i + 1][j - 1] == 0) {
            i--;
            j -= 2;
          } else {
            break;
          }
        }

        if (j == maps[i].length - 1) {
          i++;
          j--;
          if (i > maps.length - 1) {
            break;
          }
        }

      }
    }
  }

  console.log(answer);
  return answer;
}
// solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution(	[[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);
// https://school.programmers.co.kr/learn/courses/30/lessons/2844

/**
 * [
 * [2,0,2,2,2],
 * [2,0,2,0,2],
 * [2,0,2,2,2],
 * [2,2,2,0,2],
 * [0,0,0,0,2]
 * ]
 * 
 * 푸는중...
 */