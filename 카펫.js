function solution(brown, yellow) {
  var answer = [];
  let yellowArr = [];
  let rectangle = [];

  //yellow 약수 구하기
  for (let i = yellow; i > 0; i--){
    if (yellow % i == 0) {
      yellowArr.push(i);
    }
  }

  // 세로 배열 스타트값
  let y = yellowArr.length - 1;
  
  for (let i = 0; i < yellowArr.length; i++){
    //가로 세로값 넣기
    rectangle = [yellowArr[i], yellowArr[y]];
    //brown 이 yellow 를 감쌀수있는지 확인
    if ((rectangle[0] + 1 ) * 2 + (rectangle[1] + 1 ) * 2 == brown) {
      //감쌀수있다면 yellow 가로세로값에 + 2 해서 총 brown이 감싼 가로세로값 넣기
      answer = [rectangle[0] + 2, rectangle[1] + 2];
      break;
    }
    y--;
  }

  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42842

/**
 * 가로길이가 세로랑 같거나 세로보다 김
 * 갈색카펫이 노란색 블럭을 감싸고있음
 * 
 */ 