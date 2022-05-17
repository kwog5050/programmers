function solution(x) {
  let a = (x).toString();
  let b = [];
  let sum = 0;
  for(let i = 0; i < a.length; i++){
      b.push(a.charAt(i));
  }
  for(let i = 0; i < b.length; i++){
      sum += Number(b[i]);   
  }
  return x % sum == 0 ? true : false
}