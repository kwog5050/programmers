function solution(price, money, count) {
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < count; i++){
    sum += price;
    answer += sum;
  }
  return answer - money < 0 ? 0 : answer - money
} 