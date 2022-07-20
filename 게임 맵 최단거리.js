function solution(maps) {
  let answer = 0;
  const gameMap = maps.map(i => i.map(j => 0));
  
  //넓이 높이
  const width = maps.length;
  const heigth = maps[0].length;

  //왼쪽 오른쪽 아래 위
  const directionX = [-1, 1, 0, 0];
  const directionY = [0, 0, -1, 1];

  const queue = [];

  //스타트 좌표
  const startX = 0;
  const startY = 0;

  //스타트 좌표 셋팅
  queue.push([startX, startY]);
  //카피 게임판 스타트좌표에  기존 게임판 스타트숫자 넣기
  gameMap[startX][startY] = maps[startX][startY];

  while (queue.length > 0) {
    //현재 좌표
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++){
      //(4방향) 다움칸 좌표
      const nextX = x + directionX[i];
      const nextY = y + directionY[i];

      //표를 벗어날경우
      if (nextX < 0 || nextY < 0 || nextX >= width || nextY >= heigth) {
        continue;
      }

      //갈 수 없는길이라면
      if (maps[nextX][nextY] <= 0) {
        continue;
      }

      //이미 방문한곳이고 지금길이 더멀거나 같다면
      if (gameMap[nextX][nextY] > 0 && gameMap[x][y] + maps[nextX][nextY] >= gameMap[nextX][nextY]) {
        continue;
      }

      //다음 좌표에 + 1
      gameMap[nextX][nextY] = maps[nextX][nextY] + gameMap[x][y];
      //현재 좌표 갱신
      queue.push([nextX, nextY]);
    }

  }
  //도착지점값이 0이라면 -1 그게아니면 이동칸수 표시
  answer = gameMap[width - 1][heigth - 1] === 0 ? -1 : gameMap[width - 1][heigth - 1];
  
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/1844
