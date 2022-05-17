function solution(arr) {
  let sum = arr[0];
  if (arr == 10) {
    arr = [];
    arr.push(-1);
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (sum > arr[j]) {
          sum = arr[i];
        }
      }
    }
    let filtered = arr.filter((e) => e != sum);
    return filtered;
  }
} 