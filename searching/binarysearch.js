//Binary Search
//how Binary Search works
/*
In binary search we find the midpoint in array and check if required value is equal to midpoint. if required value is equal to midpoint than we return the true, otherwise we check weather required value is less than or greater than midpoint. if required value is lessthan midpoint we search in left side of array and if required value is granter than midpoint than we search in right half of array and repeat the process on subarray until we find the required value */
/*
There are Two Approaches for binary search
1-Iterative approach
2-recursive approach

*/

//1---------------Iterative approach-------------------------------------

let data = [2, 10, 18, 23, 29, 43];

function binaryIterativeSearch(data, val) {
  let start = 0;
  let end = data.length - 1;
  let position = undefined;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === val) {
      position = mid;
      break;
    } else if (data[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return position
}

console.log("binaryIterativeSearch", binaryIterativeSearch(data, 29));

function binaryRecursiveSearch(data, val) {
  let start = 0;
  let end = data.length - 1;
  let position = undefined;
  function binarySearch(data, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === val) {
      position = mid;
      return position;
    } else if (data[mid] < val) {
      binarySearch(data, mid + 1, end);
    } else {
      binarySearch(data, start, mid - 1);
    }
    return position;
  }

  return binarySearch(data, start, end);
  
}

console.log("bineary recursive search", binaryRecursiveSearch(data, 29));
