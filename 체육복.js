function solution(n, lost, reserve) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < n; i++){
    arr.push(i + 1);
  }
  for (let i = 0; i < lost.length; i++){
    arr = arr.filter((el) => el !== lost[i]);
  }
  console.log(arr);
  return answer;
}

solution(5	,[2, 4]	,[1, 3, 5]);

// https://school.programmers.co.kr/learn/courses/30/lessons/42862

/**
 * 반 전체 배열을 받는다
 * 체육복 안가져온 번호를 찾는다
 * 체육복 여벌을 가져온 번호를 찾는다
 * 여벌을 가져온 번호들이 안가져온 번호한테 빌려준다
 * 단 자기 번호와 +-1만 빌려줄수있다 그리고 체육복 여벌도 한벌이다
 * 체육수업을 참여할수있는 번호의 수를 반환한다
 * 
 */ 

// 푸는중...