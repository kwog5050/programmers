function solution(clothes) {
  var answer = 1;
  var arr = [];
  let clothesMap = new Map();

  for (let i = 0; i < clothes.length; i++){
    if (clothesMap.get(clothes[i][1]) == undefined) {
      clothesMap.set(clothes[i][1], 1);
    } else {
      clothesMap.set(clothes[i][1], clothesMap.get(clothes[i][1]) + 1);
    }
  }

  arr.push(...clothesMap.values());
  for (let i = 0; i < arr.length; i++){
    answer = (arr[i] + 1) * answer;
  }

  return answer - 1;
}