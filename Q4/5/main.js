function srt(arr) {
 
  let arr2 = arr.sort()
  let arr3 = []
  for (let i = arr2.length-1; i >= 0; i--) {
    arr3.push(arr2[i])
  }
  
  return arr.sort(), arr3

}

function asc(arr) {
  return arr.sort()
}

arr = [1,3,5,9]

//AScending
console.log(asc(arr))

//Descending
console.log(srt(arr))
