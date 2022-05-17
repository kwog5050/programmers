function solution(clothes) {
  var answer = 1;
  var arr = [];
  let clothesMap = new Map();

  // 옷 키값 메기기, 중복부위 + 1
  for (let i = 0; i < clothes.length; i++){
    if (clothesMap.get(clothes[i][1]) == undefined) {
      clothesMap.set(clothes[i][1], 1);
    } else {
      clothesMap.set(clothes[i][1], clothesMap.get(clothes[i][1]) + 1);
    }
  }

  //옷부위당 갯수 배열에 넣기
  arr.push(...clothesMap.values());
  
  /**
   * 옷입는 경우의수 계산
   * ex) 
   * 머리 2
   * 상의 4
   * 하의 2
   * 
   * (2 + 1) * (4 + 1) * (2 + 1) -1
   */
  for (let i = 0; i < arr.length; i++){
    answer = (arr[i] + 1) * answer;
  }

  return answer - 1;
} 