function removeExtremes(arr) {
  // 다시 풀어보기
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }

    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }

  return result;
}