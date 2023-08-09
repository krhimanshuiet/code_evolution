debugger;
function BinarySearch(arr, low, high, key) {
 
  if (low > high) {
    return false;
  }

  let mid = Math.floor((low + high) / 2);
  console.log(mid)

  if (arr[mid] === key) {
    return true;
  }

  if (arr[mid] < key) {
    return BinarySearch(arr, mid+1, high, key);
  }
  else {
    return BinarySearch(arr, low , mid-1, key);
  }
}


const myArr = [1,2,3,4,5,6,7,8,9,90]

const isAv = BinarySearch(myArr , 0 , myArr.length-1 , 9);
