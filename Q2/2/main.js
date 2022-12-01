function inAscOrder(arr) {

  if (arr.length == 0 || arr.length == 1) {
    return true
  }

  let temp =0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      temp = 1
    } 
  }

  if (temp == 1) {
    return false
  } else {
    return true;
  }

}

console.log(inAscOrder([9,8,7,6,5,4,3,2,1]))
console.log(inAscOrder([1,6,10,18,2,4,20]))
console.log(inAscOrder([1,2,3,4,5,6,7,8]))
console.log(inAscOrder([0]))
