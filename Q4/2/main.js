function cap(str) {
  arr = str.toLowerCase().split(' ')

  for (let x in arr) {
    arr[x] = arr[x].charAt(0).toUpperCase() + arr[x].slice(1)
  }

  console.log(arr)
  } 


cap("hello wo")
